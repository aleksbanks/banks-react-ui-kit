import React from 'react'

import { useSwitcher } from 'hooks'

import { Toggle, ToggleProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'Toggle'

export default {
	title: 'Inputs/Toggle',
	component: Toggle,
} as Meta<typeof Toggle>

const Template: StoryFn<typeof Toggle> = ({ checked = false, ...args }: ToggleProps) => {
	const [isChecked, , , toggleIsChecked] = useSwitcher(checked)
	return <Toggle checked={isChecked} onChange={toggleIsChecked} {...args} />
}

export const ToggleStory = Template.bind({})
ToggleStory.storyName = componentName

ToggleStory.args = {
	label: 'Toggle',
	size: 'm',
	disabled: false,
	labelSide: 'right',
}
