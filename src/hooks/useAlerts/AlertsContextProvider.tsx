import React, { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { createId } from 'utils/createId'

import { AlertList } from './AlertList'
import type { AlertItem, AlertsContextValues } from './types'
import type { AlertProps } from 'components/Alert'

export const AlertsContext = React.createContext<AlertsContextValues | null>(null)

export type AlertsContextProviderProps = {
	children: ReactNode
}

export const AlertsContextProvider = ({ children }: AlertsContextProviderProps) => {
	const [alerts, setAlerts] = useState<AlertItem[]>([])

	const addAlert = useCallback((alertProps: AlertProps, { closePrev = true } = {}) => {
		setAlerts((prevAlerts) => {
			const id = createId()
			return [
				...(closePrev ? [] : prevAlerts),
				{
					id,
					...alertProps,
				},
			]
		})
	}, [])

	const handleClose = useCallback((alertForClose: AlertItem) => {
		setAlerts((prevAlerts) => prevAlerts.filter((prevAlert) => prevAlert.id !== alertForClose.id))
	}, [])

	const value = useMemo(
		() => ({
			addAlert,
		}),
		[addAlert],
	)

	return (
		<AlertsContext.Provider value={value}>
			{children}
			<AlertList alerts={alerts} onClose={handleClose} />
		</AlertsContext.Provider>
	)
}
