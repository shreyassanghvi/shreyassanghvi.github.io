const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    turbopack: {
        root: path.resolve(__dirname),
    },
    basePath: '',       // no basePath since repo is username.github.io
    assetPrefix: '',    // no asset prefix needed
};

module.exports = nextConfig;
