const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ]
    },
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}