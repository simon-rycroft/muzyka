require('babel/register');

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('test', function() {
    return gulp.src(['tests/**/*.js'], { read: false })
        .pipe(mocha({reporter: 'min'}))
        .on('error', gutil.log);
});

gulp.task('watch-test', function() {
    gulp.watch(['src/**', 'tests/**'], ['test']);
});

