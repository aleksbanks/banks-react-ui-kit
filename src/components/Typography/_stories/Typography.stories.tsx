import React from 'react'

import { LOREM_IPSUM } from 'common/const/mock'

import { Typography, TypographyProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'Typography'

export default {
	title: 'Другое/Typography',
	component: Typography,
	argTypes: {
		color: {
			control: { type: 'color' },
		},
	},
} as Meta<typeof Typography>

const Template: StoryFn<typeof Typography> = (args: TypographyProps) => <Typography {...args} />

export const TypographyStory = Template.bind({})
TypographyStory.storyName = componentName

TypographyStory.args = {
	text: LOREM_IPSUM.substring(0, 187),
	variant: 'body-l',
}
