import React, { ReactNode } from 'react'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonRadius = 'round' | 'square'

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & {
	/** How large should the button be? */
	size?: ButtonSize
	/** Button contents */
	label: string
	/** Optional click handler */
	onClick?: () => void
	/** Button variant */
	variant?: ButtonVariant
	/** Button radius */
	radius?: ButtonRadius
	/** If true, the button will take up the full width of its container */
	fullWidth?: boolean
	/** Loading state */
	loading?: boolean
	/** Icon at the beginning of the button */
	startIcon?: ReactNode
	/** Icon at the end of the button */
	endIcon?: ReactNode
}
