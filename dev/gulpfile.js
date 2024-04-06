const gulp = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const browser = require("browser-sync");

// ファイル圧縮
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

// htmlの並びを綺麗にする
const beautyHTML = require("gulp-html-beautify");

// =========================================

function compileSass(){
    return gulp.src("./sass/**/**.scss")
    .pipe(scss())
    .pipe(postcss([autoprefixer(), cssSorter()]))
    .pipe(gulp.dest("./css"))

    .pipe(cleanCss())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest("./css"))
}

function watch(){
    gulp.watch("./sass/**/*.scss", gulp.series(compileSass, browserReload));
}

function browserInit() {
    browser.init({
        server: {
            baseDir: "./", // サーバーの起点となるディレクトリを指定
            index: "index.html"
        }
    });
}

function browserReload(done){
    browser.reload(); // ブラウザをリロード
    done(); // タスクが完了したことを通知
}

function minJs() {
    return gulp.src("./js/**.js")
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest("./js"))
}

function formatHTML(){
    return gulp.src("./*.html")
    .pipe(beautyHTML({
        indent_size: 4,
        indent_with_tabs: true,
    }))
    .pipe(gulp.dest("./"))
}

exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.dev = gulp.parallel(browserInit, watch);

// 圧縮起動！
exports.minJs = minJs;

// htmlFormat
exports.formatHTML = formatHTML;