import React from 'react'

import { useSwitcher } from 'hooks'

import { Checkbox, type CheckboxProps } from '..'
import type { Meta, StoryFn } from '@storybook/react-webpack5'

const componentName = 'Checkbox'

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox,
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = ({ checked = false, ...args }: CheckboxProps) => {
	const [isChecked, , , toggleIsChecked] = useSwitcher(checked)
	return <Checkbox {...args} checked={isChecked} onChange={toggleIsChecked} />
}

export const CheckboxStory = Template.bind({})
CheckboxStory.storyName = componentName

CheckboxStory.args = {
	label: 'Checkbox',
	disabled: false,
	labelSide: 'right',
	required: false,
	indeterminate: false,
	status: 'neutral',
}
