    'use strict';

    const gulp = require('gulp');
    const autoprefixer = require('gulp-autoprefixer')
    const sass = require
    ('gulp-sass')
    const sourcemaps = require('gulp-sourcemaps')
    const debug = require('gulp-debug')
    const del = require('del');
    var browserSync = require('browser-sync').create();


    gulp.task('sass', function() {
        // return gulp.src('scss/**/*.scss')
        return gulp.src('scss/app.scss')
            .pipe(debug({title: 'src'}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css'));
    });

    gulp.task('sass-reload', ['sass'], function (done) {
      browserSync.reload();
      done();
    });

    gulp.task('clean', function(){
      return del('css');
    });

    gulp.task('browser-sync', function() {
    browserSync.init({
          server: {
              baseDir: "../"
          }
        });
    });

 
    gulp.task('serve', ['clean','sass'], function() {

        browserSync.init({
            server: "../"
        });

        gulp.watch(['scss/**/*.scss'], ['clean','sass']).on('change', browserSync.reload);;
        gulp.watch("../*.html").on('change', browserSync.reload);
    });

    // gulp.task('build', gulp.series('clean', 'sass'));
    gulp.task('build', ['clean','sass']);

    // gulp.watch('scss/app.scss', ['clean','sass']);

    // gulp.task('default', ['clean','sass'], function() {
    //     gulp.watch(['scss/**/*.scss'], ['clean','sass']);
    // });

    gulp.task('default', ['serve']);
