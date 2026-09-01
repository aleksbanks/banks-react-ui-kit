import React, { useState } from 'react'

import { Button } from 'components/Button'

import { Alert, type AlertCloseHandler, type AlertProps } from '../index'
import type { Meta, StoryFn } from '@storybook/react-webpack5'

const componentName = 'Alert'

export default {
	title: 'Feedback/Alert',
	component: Alert,
} as Meta<typeof Alert>

const TemplateInner: StoryFn<typeof Alert> = (args: AlertProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClose: AlertCloseHandler = (event, reason) => {
		args.onClose?.(event, reason)
		setIsOpen(false)
	}

	const handleOpen = () => setIsOpen(true)

	return (
		<div>
			<Button label='Show' variant='secondary' onClick={handleOpen} />
			<Alert {...args} open={isOpen} onClose={handleClose} />
		</div>
	)
}

const Template: StoryFn<typeof Alert> = (args) => <TemplateInner {...args} />

export const AlertStory = Template.bind({})
AlertStory.storyName = componentName

AlertStory.args = {
	title: 'Title',
	text: 'Additional description',
	closable: true,
	position: 'bottom-left',
	status: 'info',
	closeOnClickAway: true,
	autoHideDuration: null,
}
