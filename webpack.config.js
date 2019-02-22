module.exports = {
	entry: {
		'./dist/bundle.js': './src/js/main.js',
	},
	output: {
		path: __dirname+'/',
		filename: '[name]'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"}
				]
			},
			{
				test: /\.jpg$/,
				use: [
					{loader: "url-loader"}
				]
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: './',
		port: 3001
	},
	watch: true,
};