// 'use strict';
 
// var gulp = require('gulp');
// var sass = require('gulp-sass');
 
// sass.compiler = require('node-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('scss/style.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./styles'));
// });
 
// gulp.task('watch', function () {
//   gulp.watch('scss/style.scss', gulp.parallel('sass'));
// });









'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
  }))
    .pipe(gulp.dest('./styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/style.scss', gulp.parallel('sass'));
});