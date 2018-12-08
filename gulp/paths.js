module.exports = {
    isDev: true,
    isTunnel: false,
    watch: {
        pug: ['./source/*.pug', './source/static/pug/**/*.pug', './source/components/**/*.pug', './data/data.json'],
        scss: ['./source/*.scss', './source/static/scss/**/*.scss', './source/components/**/*.scss'],
        js: ['./source/*.js', './source/static/js/**/*.js', './source/components/**/*.js'],
        images: './source/static/images/general/**/*.*',
        sprite: {
            bitmap: './source/static/sprites/bitmap/**/*.*',
            svg: './source/static/sprites/svg/**/*.*'
        },
        fonts: './source/static/fonts/**/*.*'
    },
    source: {
        pug: ['!./source/_*.pug', './source/*.pug'],
        scss: ['!./source/_*.scss', './source/*.scss'],
        js: ['!./source/*_.js', './source/*.js'],
        images: './source/static/images/general/**/*.*',
        fonts: './source/static/fonts/**/*.*',
        sprite: {
            bitmap: './source/static/images/sprites/bitmap/**/*.*',
            svg: './source/static/images/sprites/svg/**/*.svg'
        }
    },
    dest: {
        baseDir: './public/',
        html: './public/',
        css: './public/css/',
        js: './public/js/',
        images: './public/images/',
        fonts: './public/fonts/',
        sprite: {
            images: './public/css',
            scss: './source/static/scss'
        }
    }
};