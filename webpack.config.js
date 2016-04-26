var webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    filename: './public/client.js'
  },
  module: {
    loaders: [
      {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "loader": "babel",
        "query": {
          "presets": [
            "es2015",
            "react",
            "stage-0"
          ],
          "plugins": []
        }
      }
    ]
  }
};