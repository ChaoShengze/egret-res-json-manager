var path = require('path');

module.exports = {
    mode: 'production',
    entry: './out/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    node: {
        fs: "empty"
    }
};