'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate');


gulp.task('default', function() {
    nodemon({
        script: 'development.js',
        ext: 'js html',
        env: {},
        ignore: ['public']
    });
});

var script1 = [
    './public/node_modules/jquery/dist/jquery.min.js',
    './public/node_modules/angular/angular.min.js',
    './public/js/popper.min.js',   
    './public/node_modules/bootstrap/dist/js/bootstrap.min.js', 
    './public/node_modules/angular-route/angular-route.min.js',
    './public/node_modules/angular-toastr/dist/angular-toastr.tpls.js',
    './public/node_modules/angular-sanitize/angular-sanitize.min.js',
    './public/node_modules/angular-ui-router/release/angular-ui-router.min.js',
    './public/node_modules/angular-resource/angular-resource.min.js',
    './public/node_modules/angular-mocks/angular-mocks.js',
    './public/node_modules/angular-cookies/angular-cookies.js',
    './public/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    './public/node_modules/angular-animate/angular-animate.min.js',
    './public/js/dropzone.js'
];

gulp.task('min-js', function() {
    return gulp.src(script1)
        .pipe(concat('script-1.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('public/iccaches/'));
});

var script2 = [
    './public/angular/routes/icMean.js',
    './public/angular/config/config.js',
    './public/angular/controllers/user.js',
    './public/angular/controllers/dashboard.js',
    './public/angular/services/icMean.js',
];

gulp.task('min-js-1', function() {
    return gulp.src(script2)
        .pipe(concat('script-2.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify({ mangle: false }))
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('public/iccaches/'));
});

var cssFiles = [   
    './public/node_modules/bootstrap/dist/css/bootstrap.min.css',
    './public/node_modules/font-awesome/css/font-awesome.min.css',
    './public/node_modules/angular-toastr/dist/angular-toastr.min.css',
    './public/node_modules/angular-ui-bootstrap/ui-bootstrap-csp.css',
    './public/css/style.css',
    './public/css/dropzone.min.css',
    
];

gulp.task('min-css', function() {
    return gulp.src(cssFiles)
        .pipe(concat('final.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/iccaches/'));
});

gulp.task('compile', ['min-js', 'min-js-1', 'min-css']);
