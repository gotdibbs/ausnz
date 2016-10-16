const path = require('path'),
  isDev = process.env.NODE_ENV === 'development',
  isTest = process.env.NODE_ENV === 'test';

var config = {
  type: 'react-app',
  babel: {
    stage: 0,
    loose: true
  },
  webpack: {
    html: {
      mountId: 'root',
      title: 'Travel Itinerary',
      description: 'Itinerary for my trip to Australia, New Zealand and San Francisco'
    },
    loaders: {
      css: {
        query: {
            modules: true,
            localIdentName: (isDev ? '[path][name]__[local]__' : '') + '[hash:base64:5]',
            url: false
        }
      }
    },
    postcss: [
      require('precss'),
      require('autoprefixer'),
      require('cssnano')
    ],
    extra: {
      resolve: {
        alias: {
          containers: path.resolve('src/containers'),
          components: path.resolve('src/components'),
          data: path.resolve('src/data'),
          utils: path.resolve('src/utils'),
          styles: path.resolve('src/styles'),
          actions: path.resolve('src/actions'),
          model: path.resolve('src/model'),
        }
      },
      output: {
        publicPath: ''
      }
    }
  }
};

if (isTest) {
  // Enable webpack compatibility tweaks
  config.webpack.compat = {
    enzyme: true,
    sinon: true
  };

  // Tweak Karma config
  config.karma = {
    tests: 'tests.webpack.js',
    plugins: [
      require('karma-chai'),
      require('karma-spec-reporter')
    ],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec']
  };
}

module.exports = config;