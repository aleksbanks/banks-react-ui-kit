import React, { forwardRef, useMemo } from 'react'

import { classNames } from 'utils/classNames'

import type { TypographyProps } from './Typography.types'

import styles from './Typography.module.css'

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
	({ text, color, fontWeight, fullWidth = false, lineHeight, noWrap, variant = 'body-l', children, ...props }, ref) => {
		const style = useMemo(
			() => ({
				fontWeight,
				color: color ? color : 'unset',
				width: fullWidth ? '100%' : 'unset',
				lineHeight: lineHeight ? `${lineHeight}px` : 'unset',
			}),
			[color, fontWeight, fullWidth, lineHeight],
		)

		const classnames = classNames(styles.baseStyles, styles[variant], noWrap && styles.nowrap)

		return (
			<p className={classnames} ref={ref} style={style} {...props}>
				{text}
				{children}
			</p>
		)
	},
)

Typography.displayName = 'Typography'
