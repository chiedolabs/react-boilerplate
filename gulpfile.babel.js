'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import minifyCSS from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';

// Files to fun sass compilation on
gulp.task('sass', () => {
  gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/static/css/'));
});

gulp.task('sass-watch', () => {
  // Watch all .scss files for changes
  gulp.watch(['./scss/style.scss'], ['sass']);
});

gulp.task('default', ['sass-watch']);

gulp.task('build', ['sass']);
