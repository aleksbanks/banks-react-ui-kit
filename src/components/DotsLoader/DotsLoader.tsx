import React, { forwardRef } from 'react'

import { classNames } from 'utils'

import styles from './DotsLoader.module.css'
import type { DotsLoaderProps } from './DotsLoader.types'

export const DotsLoader = forwardRef<HTMLDivElement, DotsLoaderProps>(({ size = 'm', color, ...props }, ref) => {
	return (
		<div className={styles.loaderWrapper} ref={ref} {...props}>
			<span className={classNames(styles.dot, styles[`dot-${size}`])} style={{ backgroundColor: color }} />
			<span className={classNames(styles.dot, styles[`dot-${size}`])} style={{ backgroundColor: color }} />
			<span className={classNames(styles.dot, styles[`dot-${size}`])} style={{ backgroundColor: color }} />
		</div>
	)
})

DotsLoader.displayName = 'DotsLoader'
