import React from 'react'

import { useSwitcher } from 'hooks'

import { Tag, TagProps } from '..'
import type { Meta, StoryFn } from '@storybook/react-webpack5'

const componentName = 'Tag'

export default {
	title: 'Basic/Tag',
	component: Tag,
	argTypes: {
		color: {
			control: { type: 'color' },
		},
	},
} as Meta<typeof Tag>

const Template: StoryFn<typeof Tag> = ({ isSelected = false, ...args }: TagProps) => {
	const [selected, , , toggleSelected] = useSwitcher(isSelected)
	return <Tag {...args} isSelected={selected} onClick={toggleSelected} />
}

export const TagStory = Template.bind({})
TagStory.storyName = componentName

TagStory.args = {
	size: 'm',
	text: 'Tag text',
	disabled: false,
	isSelected: false,
}
