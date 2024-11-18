import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import './styles/sb.css'

addons.setConfig({
	theme: create({
		base: 'light',
		barSelectedColor: '#74c69d',
		colorPrimary: '#2d6a4f',
		colorSecondary: '#6A8398',
	}),
	panelPosition: 'bottom',
	showPanel: true,
})
