/* ************** Sprites SVG **************** */
module.exports = function () {
    $.gulp.task('sprite:svg', () => {
        return $.gulp.src($.paths.source.sprite.svg)
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function (_) {
                    _('[fill]').removeAttr('fill');
                    _('[stroke]').removeAttr('stroke');
                    _('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest($.paths.dest.sprite.images))
            .pipe($.browserSync.stream());

    });
};