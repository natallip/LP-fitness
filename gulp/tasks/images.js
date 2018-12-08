module.exports = function () {

    /* *************** Copy images *************** */
    $.gulp.task('images', () => {
        return $.gulp.src($.paths.source.images)
            .pipe($.gulp.dest($.paths.dest.images))
            .pipe($.browserSync.stream());
    });

    /* *************** Copy images Production *************** */
    $.gulp.task('images:prod', () => {
        return $.gulp.src($.paths.source.images)
            .pipe($.gp.tinypng('cX8jJW90yM6szb30S5KBDHd4bRl5fPK9'))
            .pipe($.gulp.dest($.paths.dest.images))
            .pipe($.browserSync.stream());
    });
};