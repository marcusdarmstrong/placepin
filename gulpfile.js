'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('clean', function() {
  del(['public/javascripts/*.js', 'public/javascripts/maps/*.map', 'public/stylesheets/*.css', 'public/stylesheets/maps/*.map']);
});

gulp.task('lint', function() {
  return gulp.src(['src/js/app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('javascript', ['clean', 'lint'], function() {
  return browserify({ debug: true })
    .transform(babelify)
    .require('src/js/app/main.js', { entry: true })
    .bundle()
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('sass', ['clean'], function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(concat('app.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', ['javascript', 'sass']);