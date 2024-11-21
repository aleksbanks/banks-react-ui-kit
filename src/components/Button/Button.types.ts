import React, { ReactNode } from 'react'

import type { Radius, Size, UiVariant } from 'types/common.types'

export type ButtonSize = Extract<Size, 's' | 'm' | 'l'>
export type ButtonVariant = UiVariant
export type ButtonRadius = Extract<Radius, 'round' | 'square'>

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
