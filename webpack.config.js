const path = require('path');

const isProd = false
// const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './lib/es6_global/src/Index.js',
    mode: isProd ? 'production' : 'development',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'index.js',
    },
};