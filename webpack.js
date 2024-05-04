const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const createStyledComponentsTransformer = require(
  'typescript-plugin-styled-components',
).default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  stats: 'minimal',
  entry: './demo/main.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          })
        },
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
      demo: path.resolve(__dirname, './demo/'),
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Style agnostic component template',
      template: 'demo/index.html',
      favicon: 'demo/assets/ukraine-flag.ico',
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
