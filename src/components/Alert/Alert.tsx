import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent, SyntheticEvent } from 'react'

import { Typography } from 'components/Typography'
import { useInputId } from 'hooks/useInputId'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { createPortal } from 'react-dom'
import { classNames } from 'utils/classNames'

import {
	ALERT_DEFAULT_HIDE_MS,
	alertClassByPosition,
	alertClassBySize,
	alertClassByStatus,
	textVariantBySize,
	titleVariantBySize,
} from './Alert.const'
import type { AlertCloseReason, AlertProps } from './Alert.types'

import styles from './Alert.module.css'

const InfoIcon = () => (
	<svg aria-hidden fill='currentColor' viewBox='0 0 24 24'>
		<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
	</svg>
)

const CloseIcon = () => (
	<svg aria-hidden fill='currentColor' viewBox='0 0 24 24'>
		<path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
	</svg>
)

/**
 * Floating notification rendered in a portal on `document.body`.
 */
export const Alert = memo(
	forwardRef<HTMLDivElement, AlertProps>(
		(
			{
				closable = true,
				closeOnClickAway = false,
				status = 'neutral',
				position = 'top-right',
				autoHideDuration = ALERT_DEFAULT_HIDE_MS,
				size = 'm',
				onClose,
				title,
				text,
				open = false,
				className,
				style,
				id,
			},
			ref,
		) => {
			const rootRef = useRef<HTMLDivElement>(null)
			const [isPaused, setIsPaused] = useState(false)
			const alertId = useInputId(id)
			const liveRole = status === 'error' || status === 'warning' ? 'alert' : 'status'

			const handleClose = useCallback(
				(event: SyntheticEvent | Event, reason: AlertCloseReason) => {
					if (!closeOnClickAway && reason === 'clickaway') {
						return
					}

					onClose?.(event, reason)
				},
				[closeOnClickAway, onClose],
			)

			const handleClickAway = useCallback(
				(event: MouseEvent | TouchEvent) => {
					if (!open) return
					handleClose(event, 'clickaway')
				},
				[handleClose, open],
			)

			const handleCloseClick = useCallback(
				(event: ReactMouseEvent<HTMLButtonElement>) => {
					handleClose(event, 'closeButton')
				},
				[handleClose],
			)

			const handleMouseEnter = useCallback(() => {
				setIsPaused(true)
			}, [])

			const handleMouseLeave = useCallback(() => {
				setIsPaused(false)
			}, [])

			const handleFocus = useCallback(() => {
				setIsPaused(true)
			}, [])

			const handleBlur = useCallback(() => {
				setIsPaused(false)
			}, [])

			useOnClickOutside(rootRef, handleClickAway)

			useEffect(() => {
				if (!open) {
					setIsPaused(false)
				}
			}, [open])

			useEffect(() => {
				if (!open) return

				const handleKeyDown = (event: KeyboardEvent) => {
					if (event.key !== 'Escape') return
					handleClose(event, 'escapeKeyDown')
				}

				document.addEventListener('keydown', handleKeyDown)

				return () => {
					document.removeEventListener('keydown', handleKeyDown)
				}
			}, [handleClose, open])

			useEffect(() => {
				if (!open || isPaused || autoHideDuration == null || autoHideDuration <= 0) {
					return
				}

				const timeoutId = window.setTimeout(() => {
					handleClose(new Event('timeout'), 'timeout')
				}, autoHideDuration)

				return () => {
					window.clearTimeout(timeoutId)
				}
			}, [autoHideDuration, handleClose, isPaused, open])

			if (!open) {
				return null
			}

			return createPortal(
				<div className={classNames(styles.root, alertClassByPosition[position])} ref={rootRef}>
					<div
						aria-atomic='true'
						className={classNames(styles.paper, alertClassBySize[size], className)}
						id={alertId}
						ref={ref}
						role={liveRole}
						style={style}
						onBlur={handleBlur}
						onFocus={handleFocus}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<div className={styles.titleWrapper}>
							<div className={styles.title}>
								<span className={classNames(styles.icon, alertClassByStatus[status])}>
									<InfoIcon />
								</span>
								{title && <Typography as='span' text={title} variant={titleVariantBySize[size]} />}
							</div>
							{closable && (
								<button aria-label='Close' className={styles.closeButton} type='button' onClick={handleCloseClick}>
									<CloseIcon />
								</button>
							)}
						</div>
						{text && (
							<div className={styles.body}>
								<Typography as='span' text={text} variant={textVariantBySize[size]} />
							</div>
						)}
					</div>
				</div>,
				document.body,
			)
		},
	),
)

Alert.displayName = 'Alert'
