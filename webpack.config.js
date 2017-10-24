const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const dev = process.env.NODE_ENV === "dev"

let config = {
    entry: './js/dev/app.js',
    watch: true,
    output: {
        path: path.resolve('./js/dist'),
        filename: 'bundle.js',
        publicPath: 'js/dist/'
    },
    devtool: dev ? "cheap-module-eval-source-map" : "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: {importLoaders: 1}},
                    { loader: 'postcss-loader', options: {
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: ['last 2 versions', 'ie > 8']

                    }),
                        ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
}

if(!dev){
    config.plugins.push(new  UglifyJSPlugin({
        sourceMap: true
    }))
}





module.exports = config