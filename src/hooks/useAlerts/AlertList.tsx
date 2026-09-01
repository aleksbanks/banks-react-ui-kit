import React from 'react'

import { Alert } from 'components/Alert'

import type { AlertItem } from './types'

type Props = {
	alerts: AlertItem[]
	onClose: (alert: AlertItem) => void
}

export const AlertList = ({ alerts, onClose }: Props) => {
	if (alerts.length === 0) return null

	return (
		<>
			{alerts.map((alertItem) => (
				<Alert key={alertItem.id} {...alertItem} open onClose={() => onClose(alertItem)} />
			))}
		</>
	)
}
