const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  stats: 'minimal',
  entry: './demo/src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      demosrc: path.resolve(__dirname, './demo/src/'),
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Style agnostic component template',
      template: 'demo/src/index.html',
      favicon: 'demo/src/assets/ukraine-flag.ico',
    }),
    new ESLintPlugin({
      eslintPath: require.resolve('eslint'),
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devServer: {
    static: './dist',
    port: 8000,
  },
};
