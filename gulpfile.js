var gulp = require('gulp-help')(require('gulp')),
    connect = require('gulp-connect');

gulp.task('connect', 'Starts a server for LiveReload', function() {
  connect.server({
    root: './src/',
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', 'Reloads project files', function() {
  gulp.src('./src/**/*.*')
      .pipe(connect.reload());
});

gulp.task('watch', 'Watches for changes in project files, calls reload task when changes occur', function() {
  gulp.watch(['./src/**/*.*'], ['reload']);
});

gulp.task('default', 'Runs by default', ['connect', 'watch']);
