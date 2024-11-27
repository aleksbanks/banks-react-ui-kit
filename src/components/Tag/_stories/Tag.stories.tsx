import React from 'react'

import { Tag, TagProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

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

const Template: StoryFn<typeof Tag> = ({ ...args }: TagProps) => {
	return <Tag {...args} />
}

export const TagStory = Template.bind({})
TagStory.storyName = componentName

TagStory.args = {
	size: 'm',
	text: 'Tag text',
	disabled: false,
	isSelected: false,
}
