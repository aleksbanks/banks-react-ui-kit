import React from 'react'
import { DotsLoader, DotsLoaderProps } from '..'
import type { Meta, StoryFn } from '@storybook/react'

const componentName = 'DotsLoader';

export default {
	title: 'Loading/DotsLoader',
	component: DotsLoader,
} as Meta<typeof DotsLoader>;

const Template: StoryFn<typeof DotsLoader> = (args: DotsLoaderProps) => <DotsLoader {...args} />;

export const DotsLoaderStory = Template.bind({});
DotsLoaderStory.storyName = componentName;

DotsLoaderStory.args = {
	size: 'm',
};
