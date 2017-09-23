var gulp = require('gulp');
var pug = require('gulp-pug');
var data = require('gulp-data');
var stylus = require('gulp-stylus');

gulp.task('pug',function(){
    return gulp.src('./src/pug/*.pug').pipe(pug()).pipe(gulp.dest('./dest'));
});

gulp.task('watch-pug',function(){
     gulp.watch('./src/pug/*.pug',['pug']);
     gulp.watch('./src/pug/aux/*.pug',['pug']);
});

gulp.task('stylus',function(){
    return gulp.src('./src/stylus/*.styl').pipe(stylus()).pipe(gulp.dest('./dest/css'));
});

gulp.task('watch-stylus',function(){
     gulp.watch('./src/stylus/*.styl',['stylus']);
     gulp.watch('./src/stylus/aux/*.styl',['stylus']);
});

gulp.task('default',['pug','watch-pug','stylus','watch-stylus']);
