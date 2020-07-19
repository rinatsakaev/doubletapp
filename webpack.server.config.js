const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports =
    {
        entry: './server/index.js',
        output: {
            path: path.join(__dirname, '/dist-server'),
            filename: 'index_bundle.js'
        },
        node: {
            __filename: true,
            __dirname: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }]
        },
        externals: [nodeExternals()],
        target: 'node',
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: './server/static', to: 'static' },
                ],
            })
        ]
    };
