module.exports = function () {
    /* *************** Copy fonts *************** */
    $.gulp.task('fonts', () => {
        return $.gulp.src($.paths.source.fonts)
            .pipe($.gulp.dest($.paths.dest.fonts))
            .pipe($.browserSync.stream());
    });
};