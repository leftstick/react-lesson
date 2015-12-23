'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var del = require('del');

gulp.task('clean', function() {
    return del(['./build/**/*']);
});

gulp.task('copy-src', ['clean'], function() {
    return gulp.src(['img/*'], {'base': '.'})
        .pipe(gulp.dest('build/'));
});

gulp.task('release', ['copy-src'], function(callback) {
    var path = require('path');
    var replace = require('gulp-replace');
    var config = require('./webpack.prod.config');

    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString());
        gulp.src(['index.html'], {'base': '.'})
            .pipe(replace('common.bundle.js', stats.hash + '.common.bundle.js'))
            .pipe(replace('index.bundle.js', stats.hash + '.index.bundle.js'))
            .pipe(replace('<script src="http://localhost:8080/webpack-dev-server.js"><\/script>', ''))
            .pipe(gulp.dest('build/'))
            .on('end', callback);
    });
});


gulp.task('dev', function(callback) {
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.dev.config');
    config.entry.index.unshift('webpack-dev-server/client?http://localhost:8080');

    new WebpackDevServer(webpack(config), {
        historyApiFallback: true,
        publicPath: '/js/',
        noInfo: true,
    }).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});
