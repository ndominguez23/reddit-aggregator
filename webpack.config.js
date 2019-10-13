const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    publicPath: path.resolve(__dirname, '/build/'),
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/build/'),
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env',
                '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.s?css/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: process.env.NODE_ENV === 'development',
          //   },
          // },
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     // Options similar to the same options in webpackOptions.output
  //     // both options are optional
  //     filename: 'styles.css',
  //   }),
  // ],
};
