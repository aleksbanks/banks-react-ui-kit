import React from 'react'

import { useSwitcher } from 'hooks'

import { RadioButton, RadioButtonProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'RadioButton'

export default {
	title: 'Inputs/Radio/RadioButton',
	component: RadioButton,
} as Meta<typeof RadioButton>

const Template: StoryFn<typeof RadioButton> = ({ ...args }: RadioButtonProps) => {
	const [isChecked, , , toggleIsChecked] = useSwitcher(false)
	return <RadioButton checked={isChecked} onChange={toggleIsChecked} {...args} />
}

export const RadioButtonStory = Template.bind({})
RadioButtonStory.storyName = componentName

RadioButtonStory.args = {
	label: 'Radio Button',
	disabled: false,
	labelSide: 'right',
	size: 's',
	// Uncomment this to use image
	image: {
		src: 'https://cdn-icons-png.flaticon.com/512/147/147142.png?w=1380&t=st=1683113325~exp=1683113925~hmac=db2820b1a94747a5c5173e92017f44e6e5643dc45635583487e2792e95c94315',
		alt: 'desc',
	},
}
