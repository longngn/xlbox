// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss'
        ]
      }
    ],
  },

  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  }
};
