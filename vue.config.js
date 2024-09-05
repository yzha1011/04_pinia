const webpack = require('webpack');

module.exports = {
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      // 定义 VUE_PROD_HYDRATION_MISMATCH_DETAILS 为 false 以消除警告
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
      }),
    ],
  },

  // 可选：你可以在这里定义其他 Webpack 配置，或进一步定制项目
};

