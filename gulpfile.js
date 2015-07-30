'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('lint', function() {
  return gulp.src(['src/js/app/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('javascript', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(babel({ blacklist: ['strict'], ignore: ['src/js/lib/*.js'] }))
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(concat('app.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', ['lint', 'javascript', 'sass']);