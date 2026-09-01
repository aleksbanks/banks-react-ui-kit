import type { CSSProperties, SyntheticEvent } from 'react'

export type AlertStatus = 'success' | 'info' | 'warning' | 'error' | 'neutral'

export type AlertSize = 'm' | 'l'

export type AlertPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export type AlertCloseReason = 'timeout' | 'clickaway' | 'escapeKeyDown' | 'closeButton'

export type AlertCloseHandler = (event: SyntheticEvent | Event, reason: AlertCloseReason) => void

export type AlertProps = {
	/** Whether the notification is visible */
	open?: boolean
	/** Notification title */
	title?: string
	/** Notification description */
	text?: string
	/** Screen corner */
	position?: AlertPosition
	/** Show the close button */
	closable?: boolean
	/** Status that colors the icon */
	status?: AlertStatus
	/** Close when clicking outside the notification
	 * @default false
	 */
	closeOnClickAway?: boolean
	/** Size of text and min-width */
	size?: AlertSize
	/** Auto-hide delay in ms. `null` disables the timer */
	autoHideDuration?: number | null
	/** Fired on timer, outside click, close button, or Escape */
	onClose?: AlertCloseHandler
	className?: string
	style?: CSSProperties
	id?: string
}
