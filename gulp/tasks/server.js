/* *************** Server *************** */
module.exports = function () {
    $.gulp.task('server', () => {
        $.browserSync.init({
            tunnel: false,
            server: {
                baseDir: $.paths.dest.baseDir
            }
        });

        $.gulp.watch($.paths.watch.pug, $.gulp.series('pug'));
        //$.gulp.watch($.paths.data, $.gulp.series('pug'));
        $.gulp.watch($.paths.watch.scss, $.gulp.series('scss'));
        $.gulp.watch($.paths.watch.js, $.gulp.series('js'));
        $.gulp.watch($.paths.watch.sprite.bitmap, $.gulp.series('sprite:bitmap'));
        $.gulp.watch($.paths.watch.sprite.svg, $.gulp.series('sprite:svg'));
        $.gulp.watch($.paths.watch.images, $.gulp.series('images'));
        $.gulp.watch($.paths.watch.fonts, $.gulp.series('fonts'));
    });
};