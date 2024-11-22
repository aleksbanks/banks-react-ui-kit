import React from 'react'

import { Checkbox, type CheckboxProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'Checkbox'

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox,
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = ({ ...args }: CheckboxProps) => <Checkbox {...args} />

export const CheckboxStory = Template.bind({})
CheckboxStory.storyName = componentName

CheckboxStory.args = {
	label: 'Checkbox',
	disabled: false,
	labelSide: 'right',
	required: false,
	status: 'neutral',
	// Uncomment this to use image
	// image: {
	// 	src: 'https://cdn-icons-png.flaticon.com/512/147/147142.png?w=1380&t=st=1683113325~exp=1683113925~hmac=db2820b1a94747a5c5173e92017f44e6e5643dc45635583487e2792e95c94315',
	// 	alt: 'Описание изображения',
	// },
}
