const HtmlWebPackPlugin  = require("html-webpack-plugin");
var webpack = require('webpack');
const path = require("path");

const getPlugins = (argv) => {
    let plugins = [
		new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			})
	] ;

    plugins = plugins.concat([
        new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    })]);
    
    if (argv.mode === 'development') {
		console.log ("************************") ;
		console.log (" Build for Development! ") ;
		console.log ("************************") ;
	}
	return plugins ;
}

module.exports = (env, argv) => ({
    devtool: 'source-map',
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    target: "web",
    devServer: {
        port: 8082,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        fallback:{
            stream: false,
            buffer: false,
        }
    },
    module: {
        rules: [
           {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env", "@babel/preset-react"],
                    "plugins": ["@babel/plugin-transform-runtime"]
                  }
            },
           },
           {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: ['style-loader', 'css-loader'],
            },
            {
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
            {
				test: /\.(png|svg|jpg|gif)$/,
		        use: [
					'file-loader'
				]
			},
            {
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}, 
        ],
    },
    performance: {
		hints: false,
		maxEntrypointSize: 1512000,
		maxAssetSize: 1512000
	},
    plugins: getPlugins(argv)
});