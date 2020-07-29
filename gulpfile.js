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

function css() {
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

function styles() { 
  return gulp.src('./build/css/*.css')
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
  .pipe(browserSync.stream());
};

function concatJs() {
  return gulp.src([
    './src/js/jquery-3.4.1.min.js',
    './src/js/swiper.min.js',
    './src/js/main.js',
    './src/js/search.js',
    './src/js/swipe.js',
    './src/js/main-menu.js',
    './src/js/banner-desc.js',
    './src/js/modal.js',
    './src/js/form-style.js',
    './src/js/input-mask.js',
    './src/js/select-form.js',
    './src/js/map.anhor.js',
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js'))
    // .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream()) 
};

function babelJs() {
  return gulp.src('build/js/all.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js'))
    // .pipe(browserSync.stream()); 
};

function uglifyJs() {
  return pipeline(
    gulp.src('build/js/*.js'),
    uglify(),
    gulp.dest('build/js')
  )
  // .pipe(browserSync.stream()); 
};

function getSprite() {
  return gulp.src('img/*.svg')
    .pipe(svgStore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('img'));
};

function getWebp() {
  return gulp.src('img/*.{png,jpg}')
    .pipe(webp({
      quality: 95,
      lossless: false
    }))
    .pipe(gulp.dest('img/webp'))
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
  return del(['build/*', 'src/js/all.js'])
};

function copy () {
  return gulp.src([
    'src/fonts/**/*.{woff,woff2}',
    'src/img/**',
    // 'src/js/**',
    // 'src/*.css',
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
exports.getSprite = getSprite;
exports.imgCompressed = imgCompressed;
exports.pngCompressed = pngCompressed;                          
exports.getWebp = getWebp; 

exports.build = gulp.series(clean, css, gulp.parallel(styles), concatJs, babelJs, uglifyJs, html, copy, watch); 

exports.default = gulp.series(clean, css, gulp.parallel(styles), concatJs, babelJs, uglifyJs, html, copy, watch); 
