import { useCallback, useContext } from 'react'

import { AlertsContext } from './AlertsContextProvider'
import type { AlertsContextValues } from './types'
import type { AlertSize } from 'components/Alert/Alert.types'

type AlertResult = {
	addErrorsAlert: (
		errors:
			| {
					message: string | null | undefined
			  }[]
			| null
			| undefined,
		title?: string,
		size?: AlertSize,
	) => void
	addErrorAlert: (text?: string, title?: string, size?: AlertSize) => void
	addSuccessAlert: (text?: string, title?: string, size?: AlertSize) => void
	addAlert: AlertsContextValues['addAlert']
}

const PROVIDER_ERROR = 'useAlerts must be used within AlertsContextProvider'

/**
 * Queue notifications through `AlertsContextProvider`.
 *
 * Wrap the app (or Storybook story) with `AlertsContextProvider`, then call
 * `addAlert`, `addErrorAlert`, `addSuccessAlert`, or `addErrorsAlert`.
 */
export const useAlerts = (): AlertResult => {
	const context = useContext(AlertsContext)
	const addAlert = context?.addAlert

	const addErrorsAlert: AlertResult['addErrorsAlert'] = useCallback(
		(errors, title = 'Error', size = 'm') => {
			if (!addAlert) {
				throw new Error(PROVIDER_ERROR)
			}

			addAlert({
				title,
				size,
				text: errors?.map((error) => error.message ?? '').join(' '),
				status: 'error',
			})
		},
		[addAlert],
	)

	const addErrorAlert: AlertResult['addErrorAlert'] = useCallback(
		(text, title = 'Error', size = 'm') => {
			if (!addAlert) {
				throw new Error(PROVIDER_ERROR)
			}

			addAlert({
				title,
				text,
				size,
				status: 'error',
			})
		},
		[addAlert],
	)

	const addSuccessAlert: AlertResult['addSuccessAlert'] = useCallback(
		(text, title = 'Success', size = 'm') => {
			if (!addAlert) {
				throw new Error(PROVIDER_ERROR)
			}

			addAlert({
				title,
				text,
				size,
				status: 'success',
			})
		},
		[addAlert],
	)

	if (!addAlert) {
		throw new Error(PROVIDER_ERROR)
	}

	return {
		addErrorsAlert,
		addErrorAlert,
		addSuccessAlert,
		addAlert,
	}
}
