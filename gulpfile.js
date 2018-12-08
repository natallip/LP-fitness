global.$ = {
    tasks: require('./gulp/tasks.js'),
    paths: require('./gulp/paths'),
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')({
        scope: ['devDependencies']
    }),
    fs: require('fs'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    webpackConfig: require('./webpack.config.js'),
    webpackStream: require('webpack-stream'),
    webpack: require('webpack'),
    spriteBitmap: require('gulp.spritesmith'),
    svgSprite: require('gulp-svg-sprite')
};

$.tasks.forEach(task => {
    require(task)();
});

/* *************** Development mode *************** */
$.gulp.task('default',
    $.gulp.series (
        'clean:public',
        $.gulp.parallel('images', 'fonts', 'sprite:bitmap', 'sprite:svg'),
        $.gulp.parallel('scss', 'pug', 'js'),
        'server'
    )
);
/* *************** Production mode *************** */
$.gulp.task('prod',
    $.gulp.series (
        'clean:public',
        $.gulp.parallel('images:prod', 'fonts', 'sprite:bitmap', 'sprite:svg'),
        $.gulp.parallel('scss:prod', 'pug:prod', 'js')
    )
);
