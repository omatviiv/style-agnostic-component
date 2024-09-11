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
        // react-template uses babel-loader because more advances config
        // is needed, here this is only demo app which is only for local
        // development so ts-loader should be fine
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
      projectRoot: path.resolve(__dirname, '../'),
      demo: path.resolve(__dirname, '../demo/'),
      svg: path.resolve(__dirname, '../svg/'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
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
