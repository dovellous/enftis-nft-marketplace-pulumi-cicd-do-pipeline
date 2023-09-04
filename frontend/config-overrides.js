/* config-overrides.js */
const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        "assert": require.resolve("assert"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "path": "path-browserify",
      "process": require.resolve("process/browser"),
      "querystring": require.resolve("querystring-es3"),
      "stream": require.resolve("stream-browserify"),
      "timers": require.resolve("timers-browserify"),
      "tty": require.resolve("tty-browserify"),
      "url": require.resolve("url"),
      "util": require.resolve("util/"),
      //"zlib": require.resolve("browserify-zlib")
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}