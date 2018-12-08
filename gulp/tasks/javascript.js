/* *************** JavaScript compiler *************** */
module.exports = function () {
    $.gulp.task('js', () => {
        return $.gulp.src($.paths.source.js)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(err => {
                    return {
                        title: 'js',
                        message: err.message
                    }
                })
            }))
            .pipe($.webpackStream($.webpackConfig, $.webpack))
            .pipe($.gulp.dest($.paths.dest.js))
            .pipe($.browserSync.stream());
    });
};