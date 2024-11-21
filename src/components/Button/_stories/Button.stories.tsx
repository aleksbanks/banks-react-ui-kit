import React from 'react'

import { Button, type ButtonProps } from '../index'
import type { Meta, StoryFn } from '@storybook/react'

export default {
	title: 'Basic/Button',
	component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const ButtonStory = Template.bind({})

ButtonStory.args = {
	label: 'Button',
	variant: 'primary',
	size: 'm',
	radius: 'round',
	loading: false,
}
