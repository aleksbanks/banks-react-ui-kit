import React from 'react'

import './button.module.css'
import type { ButtonProps } from '.'

export const Button = ({ size = 'medium', label, ...props }: ButtonProps) => {
	console.log(size)

	return (
		<button type='button' {...props}>
			{label}
		</button>
	)
}
