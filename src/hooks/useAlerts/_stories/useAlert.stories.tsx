import React from 'react'

import { AlertsContextProvider, useAlerts } from '../..'
import { Alert, type AlertProps } from '../../../components/Alert'
import { Button } from '../../../components/Button'
import type { Meta, StoryFn } from '@storybook/react-webpack5'

const componentName = 'useAlerts'

const meta: Meta<typeof Alert> = {
	title: 'Hooks/useAlerts',
	component: Alert,
}

export default meta

const TemplateInner: StoryFn<typeof Alert> = (args: AlertProps) => {
	const { addAlert } = useAlerts()

	const handleClick = () => {
		addAlert(args)
	}

	return <Button label='Show notification' variant='secondary' onClick={handleClick} />
}

const Template: StoryFn<typeof Alert> = (args: AlertProps) => (
	<AlertsContextProvider>
		<TemplateInner {...args} />
	</AlertsContextProvider>
)

export const UseAlertStory: StoryFn<typeof Alert> = Template.bind({})
UseAlertStory.storyName = componentName

UseAlertStory.args = {
	autoHideDuration: 5000,
	title: 'Title',
	text: 'Additional description',
	closable: true,
	position: 'top-right',
	status: 'info',
	closeOnClickAway: true,
}
