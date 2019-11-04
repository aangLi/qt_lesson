module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
    plugins: new HtmlWebPackPlugin({
			template: './index.html',
		}),
  }
}