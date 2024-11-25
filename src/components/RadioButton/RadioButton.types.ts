import type { InputHTMLAttributes, Ref } from 'react'

import type { ImageProps, Position, Size, Status } from 'types/common.types'

export type RadioButtonTextSide = Extract<Position, 'right' | 'left'>

export type RadioButtonStatus = Status

export type RadioButtonSize = Extract<Size, 's' | 'm'>

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'required' | 'size'> {
	/**
	 * Label text for the radio button.
	 */
	label?: string

	/**
	 * Size of the radio button.
	 */
	size?: RadioButtonSize

	/**
	 * Side on which to display the label text.
	 */
	labelSide?: RadioButtonTextSide

	/**
	 * Special status for the radio button.
	 */
	status?: RadioButtonStatus

	/**
	 * Checked state for the radio button.
	 */
	checked?: boolean

	/**
	 * Optional image to display with the radio button.
	 */
	image?: ImageProps

	/**
	 * Optional reference to the root HTMLDivElement.
	 */
	rootRef?: Ref<HTMLDivElement>
}
