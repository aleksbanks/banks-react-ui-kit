import React, { forwardRef } from 'react'

import { classNames } from 'utils'

import type { DotsLoaderProps } from './DotsLoader.types'

import styles from './DotsLoader.module.css'

export const DotsLoader = forwardRef<HTMLDivElement, DotsLoaderProps>(
	({ size = 'm', color, 'aria-hidden': ariaHidden, 'aria-label': ariaLabel, ...props }, ref) => {
		const isHidden = Boolean(ariaHidden)

		return (
			<div
				aria-hidden={isHidden || undefined}
				aria-label={isHidden ? undefined : ariaLabel ?? 'Loading'}
				className={styles.loaderWrapper}
				ref={ref}
				role={isHidden ? undefined : 'status'}
				{...props}
			>
				<span
					aria-hidden
					className={classNames(styles.dot, styles[`dot-${size}`])}
					style={{ backgroundColor: color }}
				/>
				<span
					aria-hidden
					className={classNames(styles.dot, styles[`dot-${size}`])}
					style={{ backgroundColor: color }}
				/>
				<span
					aria-hidden
					className={classNames(styles.dot, styles[`dot-${size}`])}
					style={{ backgroundColor: color }}
				/>
			</div>
		)
	},
)

DotsLoader.displayName = 'DotsLoader'
