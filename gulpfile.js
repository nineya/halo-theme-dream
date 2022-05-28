const {src, dest, task, series, parallel} = require("gulp");
const webpack = require("webpack-stream");
const less = require("gulp-less");
const autoprefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-csso");
const zip = require('gulp-zip');
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const crypto=require('crypto');
const path = require("path");
const execSync = require('child_process').execSync;
const fs = require("fs");
const resolve = (name) => path.resolve(__dirname, name);
const cssPath = "./source/css";
const jsPath = "./source/js";
const distPath = "./dist";
const devModel = process.env.npm_config_devel;
const version = process.env.npm_config_tag;

if (devModel) {
    console.log('> 开发模式')
}
version && console.log(`> 发布版本：${version}`)

task("clean", () => {
    return src([cssPath, jsPath, distPath], {
        read: false,
        allowEmpty: true,
    }).pipe(
        clean({
            force: true,
        })
    );
});

task("version", (done) => {
    if (version == null) {
        console.log(`[Version] No '--version' parameters are specified`)
        done();
        return;
    }
    const themePath = "theme.yaml";
    const packagePath = "package.json"
    const themeData = fs.readFileSync(themePath, "utf8")
        .replace(/^version:\s+[^\s]+$/m, "version: " + version)
    fs.writeFileSync(themePath, themeData);
    let packageData = fs.readFileSync(packagePath, "utf8")
        .replace(/\"version\":\s*\"[^\"]+\"/, `"version": "${version}"`)
    fs.writeFileSync(packagePath, packageData);
    done()
});

task("css", () => {
    const ignoreFiles = [].map((file) => `./src/css/${file}.less`);

    let gw = src("./src/css/**/*.less", {
        ignore: ignoreFiles,
    })
        .pipe(less())
        .pipe(
            autoprefix({
                overrideBrowserslist: ["> 2%", "last 2 versions", "not ie 6-9"],
                cascade: false,
            })
        );
    if (!devModel) {
        gw = gw.pipe(minifyCSS());
    }

    return gw.pipe(
        rename({
            suffix: ".min",
        })
    ).pipe(dest(cssPath));
});

task("js", () => {
    const readFile = (prefix, dir, ignoreFiles) => {
        let result = {};
        let files = fs.readdirSync(dir, "utf-8");
        files.forEach((file) => {
            let filePath = path.join(dir, file)
            let states = fs.statSync(filePath);
            if (states.isDirectory()) {
                Object.assign(result, readFile(path.join(prefix, file), filePath, ignoreFiles));
            } else if (ignoreFiles.length
                ? /\.js$/.test(file) && !ignoreFiles.includes(path.join(prefix, file))
                : /\.js$/.test(file)) {
                const fileName = file.replace(/.js$/, "");
                result[path.join(prefix, fileName)] = resolve(filePath);
            }
        })
        return result;
    }
    const getEntryData = () => {
        return readFile("", "./src/js", [])
    };

    return webpack({
        mode: devModel ? "development" : "production",
        entry: getEntryData(),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    include: resolve("source"),
                    exclude: resolve("node_modules"),
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            ],
        },
        stats: "errors-only",
        output: {
            filename: "[name].min.js",
        },
    })
        .pipe(uglify())
        .pipe(dest(jsPath))
});

task("freecdn", (done) => {
    if (version == null) {
        console.log(`[FreeCDN] No '--version' parameters are specified`)
        done();
        return;
    }
    const tempFileName = `cdn-${new Date().getTime()}.mew`
    const manifestPath = "./source/freecdn-manifest.txt"

    const readFile = (dir, ignoreFiles) => {
        let files = fs.readdirSync(dir, "utf-8");
        files.forEach((file, i) => {
            let filePath = dir + "/" + file
            let states = fs.statSync(filePath);
            if (ignoreFiles.length !== 0 && ignoreFiles.includes(filePath)) {
                return;
            }
            if (states.isDirectory()) {
                readFile(filePath, ignoreFiles)
            } else {
                let hash = crypto.createHash('SHA256').update(fs. readFileSync(filePath)).digest('base64')
                fs.appendFileSync(tempFileName, `${hash} https://raw.githubusercontent.com/nineya/halo-theme-dream/${version}/${filePath}\n`)
                fs.appendFileSync(tempFileName, `${hash} https://cdn.jsdelivr.net/gh/nineya/halo-theme-dream@${version}/${filePath}\n`)
                fs.appendFileSync(tempFileName, `${hash} https://unpkg.com/nineya/halo-theme-dream@${version}/${filePath}\n`)
            }
        })
    }

    console.log(`[FreeCDN] Scan local script files...`)
    readFile("source", ["source/freecdn-internal", "source/freecdn-loader.min.js", "source/urls.mew"])

    console.log(`[FreeCDN] Empty old data in FreeCDN...`)
    console.log(execSync(`freecdn db --del-all`).toString());

    console.log(`[FreeCDN] Import file information to FreeCDN...`)
    console.log(execSync(`freecdn db --import < ${tempFileName}`).toString());
    fs.unlinkSync(tempFileName)

    console.log(`[FreeCDN] Create 'freecdn-manifest.txt' file...`)
    console.log(execSync(`cd source & freecdn find --save --with-urls urls.mew`).toString());

    console.log(`[FreeCDN] Process 'freecdn-manifest.txt' file...`)
    const manifestData = fs.readFileSync(manifestPath, "utf8")
        .replace(/^\//mg, "/themes/dream/source/")
    console.log(`[FreeCDN] Complete!`)
    fs.writeFileSync(manifestPath, manifestData);
    done();
});

task("zip", () => {
    const target = ['./source/**', './template/**', './*.ftl', './*.yaml', 'README.md', 'screenshot.png', 'LICENSE']
    return src(target, {base: '.'})
        .pipe(zip('halo-theme-dream.zip'))
        .pipe(dest(distPath));
});

// 默认模式
task("default", series("clean", parallel("css", "js"), "zip"));

// release模式，需要使用--tag参数指定版本号
task("release", series("clean", "version", parallel("css", "js"), "freecdn", "zip"));
