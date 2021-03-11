module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: process.env.VUE_APP_API_ENDPOINT_URL,
  },

  transpileDependencies: ['vuetify'],
};
