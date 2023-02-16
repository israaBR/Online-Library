const { src, dest, series, watch, parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const terser = require("gulp-terser");
var htmlreplace = require("gulp-html-replace");

let globs = {
  html: "./online-library/*.html",
  css: "./online-library/*.css",
  js: "./online-library/*.js",
};

function htmlTask() {
  return src(globs.html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(
      htmlreplace({
        css: "assets/style.css",
        js: "assets/script.js",
      })
    )
    .pipe(dest("dist"));
}
function cssTask() {
  return src(globs.css)
    .pipe(concat("style.css"))
    .pipe(cleanCss())
    .pipe(dest("dist"));
}
function jsTask() {
  return src(globs.js)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(dest("dist"));
}

function watchTask() {
  watch(globs.html, htmlTask);
  watch(globs.css, cssTask);
  watch(globs.js, jsTask);
}

exports.default = series(parallel(htmlTask, cssTask, jsTask), watchTask);
