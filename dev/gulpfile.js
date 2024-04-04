const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const browser = require("browser-sync");


function compileSass(){
    return gulp.src("../src/sass/**/*.sass")
    pipe(sass())
    pipe(postcss([autoprefixer(), cssSorter()]))
    pipe(gulp.dest("../public/css/"))
}

function watch(){
    gulp.watch("../src/sass/**/**.sass", compileSass)
}

exports.default = watch;