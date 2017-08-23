const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderOptionsPlugin = require('vue-loader-options-plugin');
const nib = require('nib')();

/*
* path -> es una funcion para evitar inconsistenca ademas se indica que el bundle.js se 
* crea en un carpeta dist 
*/

const path = require('path');
const CONFIG = {
	entry  : './src/index.js',
	output : {
		path : path.resolve(__dirname,'dist'),
		filename : 'bundle.js'
	},
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				loader : 'babel-loader',
				query : {
					presets : ['env']
				}
			},
			{
				test : /\.styl$/,
				use : ExtractTextPlugin.extract({
					fallback : 'style-loader',
					use : [
						'css-loader',
						'stylus-loader'
					]
				})
			},
			{
				test : /\.(gif|png|jpe?g|svg)$/i,
				use : [ 
					'file-loader?name=images/[name].[ext]',
					//'file-loader?name=[hash:6].[ext]&outputPath=images/&publicPath=images/',
					'image-webpack-loader'
				]
			}
		]
	},
	plugins : [
        new ExtractTextPlugin("app.css"),
        new VueLoaderOptionsPlugin(
        	{
        		stylus : {
        			use : [nib],
        			import : ['~nib/lib/nib/index.styl']
        		},
        		toContext : true 
        	}
        )
    ]
}

module.exports = CONFIG;