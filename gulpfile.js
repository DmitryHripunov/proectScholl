'use strict';

const gulp = require('gulp'); 

const sass = require('gulp-sass');
const minifyCss = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const rename = require('gulp-rename'); 
const notify = require('gulp-notify'); 
const del = require('del'); 

const postHtml = require('gulp-posthtml');
const include = require('posthtml-include');
const htmlMin = require("gulp-htmlmin");
const critical = require('critical').stream;
const htmlValidator = require('gulp-w3c-html-validator');//validator

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const pipeline = require('readable-stream').pipeline;

const svgStore = require('gulp-svgstore');
const imageMin = require('gulp-imagemin');
const tinymin = require('gulp-tinypng');
const webp = require('gulp-webp');

const typeOfCompression = 4;
const qualityOfImage = 75;

const browserSync = require('browser-sync').create(); 

// html
function html() {
  return gulp.src('./src/*.html')
  .pipe(postHtml([include({
     encoding: 'utf8', root: './*.html'
  })]))
  .pipe(htmlMin({
    collapseWhitespace: true
  }))
  .on('error', function (err) { log.error(err.message); })
  .pipe(gulp.dest('build')) 
  // .pipe(browserSync.stream());
};

function validateHtml() { //Html validator
  return gulp.src('src/**/*.html')
  .pipe(htmlValidator())
  .pipe(htmlValidator.reporter());
};

//css
function css() { // scss->css and avtopreficser
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(rename({
      basename: 'styles',
    })) 
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({ 
        overrideBrowserslist: [
          "last 4 version",
          "IE 10"
        ],
      })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())  
};

function styles() { //min css
  return gulp.src('./build/css/**/*.css')
    .pipe(sass({  
      outputStyle: 'compressed' 
      }).on("error", notify.onError())) 
    .pipe(minifyCss()) 
    .pipe(rename({ 
      basename: 'styles',
      suffix: '.min' 
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('src/css'))  
    .pipe(browserSync.stream()); 
};


// javaScript
function concatJs() {
  return gulp.src([
    './build/js/jquery-3.4.1.min.js',
    './build/js/swiper.min.js',
    './build/js/main.js',
    './build/js/search.js',
    './build/js/swipe.js',
    './build/js/main-menu.js',
    './build/js/modal.js',
    './build/js/form-style.js',
    './build/js/select-form.js',
    './build/js/input-mask.js',
    './build/js/banner-desc.js',
    './build/js/map.anhor.js',
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream()) 
};

function babelJs() { // js preficsor
  return gulp.src('build/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js'))
    // .pipe(browserSync.stream()); 
};

function uglifyJs() {// js compressor
  return pipeline(
    gulp.src('build/js/*.js'),
    uglify(),
    gulp.dest('build/js')
  )
  // .pipe(browserSync.stream()); 
};

// images
function getSprite() {
  return gulp.src('src/img/svg/*.svg')
    .pipe(svgStore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('src/img'));
};

function getWebp() {
  return gulp.src('src/img/*.{png,jpg}')
    .pipe(webp({
      quality: 95,
      lossless: false
    }))
    .pipe(gulp.dest('src/img/webp'))
    // .pipe(browserSync.stream()); 
};

function imgCompressed() {
  return gulp.src('img/**/*.{png,jpg}')
    .pipe(imageMin([
      imageMin.optipng({ optimizationLevel: typeOfCompression}),
      // imageMin.jpegtran({ progressive: true }),
      imageMin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('img'));
};

// tinypng api key gTuVPxhcb65R4KUvguBnOL3LRdjAFRFu
function pngCompressed() {
  return gulp.src('img/**/*.{png,jpg}')
    .pipe(tinymin('gTuVPxhcb65R4KUvguBnOL3LRdjAFRFu'))
    .pipe(gulp.dest('img'));
};

function watch() { 
 	browserSync.init({ 
    server: './build'
		// tunnel: true,
	});
  gulp.watch('./src/scss/*.scss', gulp.parallel(css, styles));
  gulp.watch('./src/js/*.js', gulp.parallel(concatJs, babelJs, uglifyJs));  
  gulp.watch('./src/*.html', gulp.parallel(html)).on('change', browserSync.reload);
};

function clean() {
  return del(['build/**/*.*'])
};

function copy () {
  return gulp.src([
    'src/fonts/**/*.{woff,woff2}',
    'src/img/**',
    'src/js/*.*',
    'src/css/*.*',
    'src/video/*.*'
  ], {
    base: 'src'
  })
    .pipe(gulp.dest('build'));
};

exports.css = css;
exports.styles = styles; 
exports.copy = copy;
exports.concatJs = concatJs;
exports.babelJs = babelJs;  
exports.uglifyJs = uglifyJs; 
exports.watch = watch; 
exports.html = html; 
exports.validateHtml = validateHtml;//html vallidator
exports.getSprite = getSprite;
exports.imgCompressed = imgCompressed;
exports.pngCompressed = pngCompressed;                          
exports.getWebp = getWebp;

// exports.build = gulp.series(clean, css, gulp.parallel(styles), concatJs, babelJs, uglifyJs, html, copy, watch); 

exports.default = gulp.series(clean, css, gulp.parallel(styles), copy, concatJs, babelJs, uglifyJs, /*validateHtml,*/  html, watch);
