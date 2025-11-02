const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    turbopack: {
        root: path.resolve(__dirname),
    },
};

module.exports = nextConfig;
