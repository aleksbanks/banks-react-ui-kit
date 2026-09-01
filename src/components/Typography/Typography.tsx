import React, { forwardRef, useMemo } from 'react'

import { classNames } from 'utils/classNames'

import type { TypographyElement, TypographyProps, TypographyVariant } from './Typography.types'

import styles from './Typography.module.css'

const defaultElementByVariant: Record<TypographyVariant, TypographyElement> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	'body-xl': 'p',
	'body-l': 'p',
	'body-m': 'p',
	'body-s': 'p',
	'body-xs': 'p',
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
	(
		{ text, color, fontWeight, fullWidth = false, lineHeight, noWrap, variant = 'body-l', as, children, ...props },
		ref,
	) => {
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
		const Element = as ?? defaultElementByVariant[variant]

		return React.createElement(Element, { className: classnames, ref, style, ...props }, text, children)
	},
)

Typography.displayName = 'Typography'
