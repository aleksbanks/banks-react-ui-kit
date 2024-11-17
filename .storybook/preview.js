export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',

	options: {
		storySort: {
			method: 'alphabetical',
		},
	},

	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
