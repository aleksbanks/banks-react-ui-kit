import React from 'react'

import { Spinner, type SpinnerProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'Spinner'

export default {
	title: 'Loading/Spinner',
	component: Spinner,
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args: SpinnerProps) => <Spinner {...args} />

export const SpinnerStory = Template.bind({})
SpinnerStory.storyName = componentName

SpinnerStory.args = {
	size: 'm',
}
