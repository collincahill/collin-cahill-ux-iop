var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: ['./src/html/', './src/css'],
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('./src/**/*.*')
      .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.*'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
