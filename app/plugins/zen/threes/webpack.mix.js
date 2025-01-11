const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

mix.sass('src/scss/threes.scss', 'css');
mix.js('src/js/threes.js', 'js').vue();

mix.setPublicPath('assets');

mix.options({
    terserOptions: {
        compress: {
            ecma: 2020,  // Указываем уровень ECMAScript в compress
            drop_console: true,  // Удалить console.log() для оптимизации
        },
        output: {
            ecma: 2020,  // Поддержка modern-ECMAScript синтаксиса в output
            comments: false,  // Отключение комментариев
        },
    },
});

const vueFeatureFlagsPlugin = new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: JSON.stringify(true),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
});

mix.webpackConfig({
    output: {
        filename: '[name].js',
        chunkFilename: 'js/[name].app.js',
        publicPath: '/plugins/zen/threes/assets/',
    },
    devtool: mix.inProduction() ? false : 'inline-source-map',
    plugins: [vueFeatureFlagsPlugin],
});

if (mix.inProduction()) {
    mix.version();
}

mix.alias({ '@': path.join(__dirname, 'src/js') });
mix.copyDirectory(path.join(__dirname, 'src/images'), 'assets/images');
