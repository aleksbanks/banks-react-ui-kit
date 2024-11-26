import React, { useState } from 'react'

import { RadioGroup, RadioGroupProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'RadioGroup'

export default {
	title: 'Inputs/Radio/RadioGroup',
	component: RadioGroup,
} as Meta<typeof RadioGroup>

const Template: StoryFn<typeof RadioGroup> = ({ selectedValue, ...args }: RadioGroupProps) => {
	const [value, setValue] = useState(selectedValue)
	return <RadioGroup selectedValue={value} {...args} onChange={setValue} />
}

export const RadioGroupStory = Template.bind({})
RadioGroupStory.storyName = componentName

RadioGroupStory.args = {
	groupLabel: 'Example of RadioGroup',

	selectedValue: 2,
	items: [
		{
			label: 'First',
			value: 1,
			disabled: false,
			image: {
				src: 'https://cdn-icons-png.flaticon.com/512/147/147142.png?w=1380&t=st=1683113325~exp=1683113925~hmac=db2820b1a94747a5c5173e92017f44e6e5643dc45635583487e2792e95c94315',
				alt: 'desx',
			},
		},
		{
			label: 'Second',
			value: 2,
			disabled: false,
		},
		{
			label: 'Third',
			value: 3,
			disabled: false,
		},
		{
			label: 'Fourth (disable)',
			value: 4,
			disabled: true,
		},
		{
			label: 'Fifth',
			value: 5,
			disabled: false,
		},
	],
}
