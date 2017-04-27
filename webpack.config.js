var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
	new webpack.ResolverPlugin(
		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['main'])
	),
	new ExtractTextPlugin('[name].css', {allChunks: true}),
];


var entry, output;

entry =__dirname + '/index.js';

output = {
	path	  : __dirname + '/build',
	filename  : '[name].js',
	publicPath: '/'
};


var config = {
	entry: entry,

	output: output,

	plugins: plugins,

	module: {
		loaders: [{
			test  : /\.css$|\.less$/,
			loader: ExtractTextPlugin.extract('style-loader', [
				'css-loader?&modules&camelCase&importLoaders=1&localIdentName=[name]__[local]',
				'postcss-loader?',
				'less-loader?'
			].join('!'))
		}]
	},

	devtool: 'source-map',

	postcss: [
	],
};

module.exports = config;
