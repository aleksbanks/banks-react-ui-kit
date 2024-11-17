import React from 'react'

import { Button, type ButtonProps } from '../index'
import type { Meta, StoryFn } from '@storybook/react'

export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
		// textColor: { control: 'color' },
	},
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const ButtonStory = Template.bind({})

ButtonStory.args = {
	primary: true,
	label: 'Button',
}
