import React, { useMemo } from 'react'

import { classNames } from 'utils/classNames'

import type { ButtonProps } from '.'
import { buttonClassByRadius, buttonClassBySize, buttonClassByVariant, buttonIconSizes } from './Button.const'
import { Spinner } from '../Spinner'

import styles from './styles.module.css'

export const Button = ({
	size = 'medium',
	radius = 'round',
	variant = 'primary',
	label,
	loading = false,
	startIcon,
	endIcon,
	fullWidth,
	...props
}: ButtonProps) => {
	const className = classNames(
		styles.button,
		fullWidth && styles.fullWidth,
		buttonClassByRadius[radius],
		buttonClassByVariant[variant],
		buttonClassBySize[size],
	)

	const loader = useMemo(() => <Spinner color={'#74c69d'} size={buttonIconSizes[size]} />, [size])

	return (
		<button className={className} {...props}>
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
}
