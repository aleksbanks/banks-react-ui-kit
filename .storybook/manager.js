import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
	theme: create({
		base: 'light',
		barSelectedColor: '#FF77B7',
		colorPrimary: '#FF0078',
		colorSecondary: '#6A8398',
	}),
	panelPosition: 'bottom',
	showPanel: true,
})
