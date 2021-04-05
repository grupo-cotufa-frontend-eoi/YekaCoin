const path = require("path");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.postcss$/,
          use: ["vue-loader", "vue-style-loader", "style-loader", "css-loader", "postcss-loader"],
          include: path.resolve(__dirname, '../'),
          options: {
            postcss: [require('postcss-nesting')()]
          }
        },
      ],
    },
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ]
};