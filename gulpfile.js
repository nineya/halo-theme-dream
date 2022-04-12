const { src, dest, task, series, parallel } = require("gulp");
const webpack = require("webpack-stream");
const less = require("gulp-less");
const autoprefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-csso");
const gzip = require("gulp-gzip");
const zip = require('gulp-zip');
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const path = require("path");
const fs = require("fs");
const resolve = (name) => path.resolve(__dirname, name);
const cssPath = "./source/css";
const jsPath = "./source/js";
const distPath = "./dist";
const { EOL } = require("os");
const { version } = require("./package.json");

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

	return src("./src/css/*.less", {
		ignore: ignoreFiles,
	})
		.pipe(less())
		.pipe(
			autoprefix({
				overrideBrowserslist: ["> 2%", "last 2 versions", "not ie 6-9"],
				cascade: false,
			})
		)
		.pipe(minifyCSS())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest(cssPath));
});

task("version", (done) => {
	const filePath = "theme.yaml";
	const source = fs.readFileSync(filePath, "utf8");
	const data = source.split(/\r?\n/gm);
	let pos_index = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i].includes("version:")) {
			pos_index = i;
			break;
		}
	}
	data.splice(pos_index, 1);
	data.splice(pos_index, null, `version: ${version}`);
	fs.writeFileSync(filePath, data.join(EOL));
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
		mode: "production",
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
