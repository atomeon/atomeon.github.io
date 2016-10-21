    'use strict';

    const gulp = require('gulp');
    const sass = require('gulp-sass')

    gulp.task('sass', function() {
      gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
    });
