import type { AlertProps } from 'components/Alert'

export type AlertsContextValues = {
	addAlert: (
		alertProps: AlertProps,
		params?: {
			closePrev: boolean
		},
	) => void
}

export type AlertItem = AlertProps & {
	id: string
}
