import React, { forwardRef, useMemo } from 'react'

import { classNames } from 'utils/classNames'

import type { ButtonProps } from '.'
import { buttonClassByRadius, buttonClassBySize, buttonClassByVariant } from './Button.const'
import { Spinner } from '../Spinner'

import styles from './styles.module.css'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			size = 'm',
			radius = 'round',
			variant = 'primary',
			label,
			loading = false,
			startIcon,
			endIcon,
			fullWidth,
			...props
		},
		ref,
	) => {
		const className = classNames(
			styles.button,
			fullWidth && styles.fullWidth,
			buttonClassByRadius[radius],
			buttonClassByVariant[variant],
			buttonClassBySize[size],
		)

		const loader = useMemo(() => <Spinner size={size} />, [size])

		return (
			<button className={className} ref={ref} {...props}>
				{loading ? (
					loader
				) : (
					<>
						{startIcon}
						{label}
						{endIcon}
					</>
				)}
			</button>
		)
	},
)

Button.displayName = 'Button'
