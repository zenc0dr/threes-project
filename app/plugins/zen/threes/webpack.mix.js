const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

mix.sass('src/scss/threes.scss', 'css')
    .options({
        processCssUrls: false // Отключает автоматическую обработку относительных URL в CSS
    })
    .webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: '/plugins/zen/threes/assets/', // Указывает базовый путь для публичных файлов
        },
        // stats: {
        //     children: true // Раскомментировать только если будут ошибки сборки
        // },
        devtool: mix.inProduction() ? false : 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/, // Обработка шрифтов и SVG
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/vendor/primeicons/[name].[ext]', // Название файлов
                        publicPath: '/plugins/zen/threes/assets/', // Путь для использования в браузере
                        outputPath: 'fonts/vendor/primeicons/', // Путь для сохранения файлов
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
            }),
        ],
    });

mix.js('src/js/threes.js', 'js').vue(); // Обработка Vue.js файлов
mix.setPublicPath('assets'); // Путь к папке публичных файлов

if (mix.inProduction()) {
    mix.version(); // Версионирование файлов в продакшене
}

// Настройка alias для удобства работы с путями
mix.alias({ '@': path.join(__dirname, 'src/js') });

// Копирование дополнительных ресурсов
mix.copyDirectory(path.join(__dirname, 'src/images'), 'assets/images');
mix.copyDirectory('node_modules/primeicons/fonts', 'assets/fonts/vendor/primeicons');
