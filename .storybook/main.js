const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-webpack5-compiler-swc',
		'@chromatic-com/storybook',
		{
			name: '@storybook/addon-styling-webpack',
			options: {
				rules: [
					{
						test: /\.css$/,
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: {
									esModule: false,
									importLoaders: 1,
									modules: {
										auto: true,
										namedExport: false,
										exportLocalsConvention: 'as-is',
										localIdentName: '[path][name]__[local]--[hash:base64:5]',
									},
								},
							},
						],
					},
				],
			},
		},
		'@storybook/addon-docs',
	],

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},

	framework: {
		name: '@storybook/react-webpack5',
		options: {
			fastRefresh: true,
		},
	},

	webpackFinal: async (config) => {
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions,
			}),
		]

		return config
	},
}
