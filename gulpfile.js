/*=== Gulp Plugins ===*/

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var watch        = require('gulp-watch');
var uglify       = require('gulp-uglify');
var notify       = require('gulp-notify');

/*=== Sass -> Prefix -> Minify ===*/

gulp.task('styles', function () {

    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', notify.onError("Error: <%= error.message %>")))
    .pipe(autoprefixer({ browsers: ['iOS >= 7','last 2 versions'] }))
    .pipe(gulp.dest('./css'))

});

/*=== Javascript Minify ===*/

gulp.task('js-minify', function(){

  gulp.src('./js/tabify.js')
  .pipe(uglify().on('error', notify.onError("Error: <%= error.cause %>")))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./js'))

});

/*=== Watch Styles and Scripts ===*/

gulp.task('watch', function() {

    gulp.watch('./scss/**/*.scss', ['styles']);

    gulp.watch('./js/tabify.js', ['js-minify']);

});

/*=== Default Gulp task run watch ===*/

gulp.task('default', ['watch']);