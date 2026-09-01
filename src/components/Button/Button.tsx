import React, { forwardRef, useMemo } from 'react'

import { classNames } from 'utils/classNames'

import type { ButtonProps } from '.'
import { buttonClassByRadius, buttonClassBySize, buttonClassByVariant } from './Button.const'
import { Spinner } from '../Spinner'

import styles from './Button.module.css'

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
			disabled,
			type = 'button',
			className: classNameProp,
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
			classNameProp,
		)

		const loader = useMemo(() => <Spinner aria-hidden size={size} />, [size])

		return (
			<button
				ref={ref}
				{...props}
				aria-busy={loading || undefined}
				className={className}
				disabled={disabled || loading}
				type={type}
				{...(loading ? { 'aria-label': label } : null)}
			>
				{loading ? (
					loader
				) : (
					<>
						{startIcon && <span aria-hidden>{startIcon}</span>}
						{label}
						{endIcon && <span aria-hidden>{endIcon}</span>}
					</>
				)}
			</button>
		)
	},
)

Button.displayName = 'Button'
