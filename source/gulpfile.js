    'use strict';

    const gulp = require('gulp');
    const sass = require('gulp-sass')
    const sourcemaps = require('gulp-sourcemaps')
    const debug = require('gulp-debug')


    gulp.task('sass', function() {
        return gulp.src('scss/**/*.scss')
            .pipe(debug({title: 'src'}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css'));
    });
