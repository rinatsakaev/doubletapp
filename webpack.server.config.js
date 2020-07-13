const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports =
    {
        entry: './server/index.js',
        output: {
            path: path.join(__dirname, '/dist-server'),
            filename: 'index_bundle.js'
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
        target: 'node'
    };
