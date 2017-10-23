const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const dev = process.env.NODE_ENV === "dev"

let config = {
    entry: './js/dev/app.js',
    watch: true,
    output: {
        path: path.resolve('./js/dist'),
        filename: 'bundle.js'
    },
    devtool: dev ? "cheap-module-eval-source-map" : "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 4242,
            files: ['./*.html', './css/*.css'],
            server: {baseDir: ['./']}
        })
    ]
}

if(!dev){
    config.plugins.push(new  UglifyJSPlugin({
        sourceMap: true
    }))
}





module.exports = config