/* ************** Sprites bitmap **************** */
module.exports = function () {
    $.gulp.task('sprite:bitmap', callback => {
        const spriteData = $.gulp.src($.paths.source.sprite.bitmap)
            .pipe($.spriteBitmap({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }));
        spriteData.img.pipe($.gulp.dest($.paths.dest.sprite.images));
        spriteData.css.pipe($.gulp.dest($.paths.dest.sprite.scss));
        callback();
    });
};