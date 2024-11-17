module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-webpack5-compiler-swc',
		'@chromatic-com/storybook',
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
