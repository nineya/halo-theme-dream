const {src, dest, task, series, parallel} = require("gulp");
const webpack = require("webpack-stream");
const less = require("gulp-less");
const autoprefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-csso");
const zip = require('gulp-zip');
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const path = require("path");
const fs = require("fs");
const resolve = (name) => path.resolve(__dirname, name);
const cssPath = "./source/css";
const jsPath = "./source/js";
const distPath = "./dist";
const devModel = process.env.npm_config_dev;
let releaseVersion = process.env.npm_config_release;

if(devModel) {
	releaseVersion = null
	console.log('> 开发模式')
}
releaseVersion && console.log(`> 发布新版本：${releaseVersion}`)

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

task("css", () => {
	const ignoreFiles = [].map((file) => `./src/css/${file}.less`);

	let gw = src("./src/css/*.less", {
		ignore: ignoreFiles,
	})
		.pipe(less())
		.pipe(
			autoprefix({
				overrideBrowserslist: ["> 2%", "last 2 versions", "not ie 6-9"],
				cascade: false,
			})
		);
	if(!devModel) {
		gw = gw.pipe(minifyCSS());
	}

	return gw.pipe(
	    rename({
            suffix: ".min",
        })
    ).pipe(dest(cssPath));
});

task("version", (done) => {
	if (releaseVersion == null) {
		done();
		return;
	}
	const themePath = "theme.yaml";
	const packagePath = "package.json"
	const themeData = fs.readFileSync(themePath, "utf8")
		.replace(/^(([\s\S]*[\n\r]+)version:\s+)[^\s]+([\s\S]*)$/, "$1"+releaseVersion+"$3")
	fs.writeFileSync(themePath, themeData);
	let packageData = fs.readFileSync(packagePath, "utf8")
		.replace(/\"version\":\s*\"[^\"]+\"/, `"version": "${releaseVersion}"`)
    fs.writeFileSync(packagePath, packageData);
	done()
});

task("js", () => {
	const getEntryData = () => {
		const ignoreFiles = [];

		try {
			let files = fs.readdirSync("./src/js", "utf-8");
			files = files.filter((file) => {
				return ignoreFiles.length
					? /\.js$/.test(file) && !ignoreFiles.includes(file)
					: /\.js$/.test(file);
			});

			const result = {};
			files.forEach((file) => {
				const fileName = file.replace(/.js$/, "");
				result[fileName] = resolve(`./src/js/${file}`);
			});
			result.utils = resolve("./src/utils/utils.js");

			return result;
		} catch (error) {
			throw new Error(err);
		}
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

task("zip", () => {
	const target = ['./source/**', './template/**', './*.ftl', './*.yaml', 'README.md', 'screenshot.png', 'LICENSE']
	return src(target, { base: '.' })
		.pipe(zip('halo-theme-dream.zip'))
		.pipe(dest(distPath));
});

task("default", series("clean", "version", parallel("css", "js"), "zip"));
