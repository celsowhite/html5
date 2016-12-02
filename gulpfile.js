/*=== Gulp Plugins ===*/

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin       = require('gulp-cssmin');
var rename       = require('gulp-rename');
var watch        = require('gulp-watch');
var uglify       = require('gulp-uglify');
var notify       = require('gulp-notify');
var concat       = require('gulp-concat');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');

/*=== Sass -> Prefix -> Minify ===*/

gulp.task('styles', function () {

    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', notify.onError("Error: <%= error.message %>")))
    .pipe(autoprefixer({ browsers: ['iOS >= 7','last 2 versions'] }))
    .pipe(cssmin())
    .pipe(rename( {suffix: '.min'} ))
    .pipe(gulp.dest('./css'))

});

/*=== Javascript Minify ===*/

gulp.task('js-minify', function(){

  gulp.src('./js/custom/*.js')
  .pipe(concat('scripts.js'))
  .pipe(uglify().on('error', notify.onError("Error: <%= error.cause %>")))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./js'))

});

/*=== Image Optimization ===*/

gulp.task('imageoptimize', function() {

    gulp.src('./nonoptimizedimg/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      optimizationLevel: 6,
      use: [pngquant({quality: '65-80', speed: 2})]
    }))
    .pipe(gulp.dest('./img'))

});

/*=== Watch Styles and Scripts ===*/

gulp.task('watch', function() {

    gulp.watch('./scss/**/*.scss', ['styles']);

    gulp.watch('./js/custom/*.js', ['js-minify']);

});

/*=== Default Gulp task run watch ===*/

gulp.task('default', ['watch']);