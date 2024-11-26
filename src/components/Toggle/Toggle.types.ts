import type { InputHTMLAttributes, Ref } from 'react'

import type { Position, Size } from 'types/common.types'

export type ToggleTextSide = Extract<Position, 'right' | 'left'>

export type ToggleSize = Extract<Size, 'm' | 's'>

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	/**
	 * Label text to be displayed next to the toggle
	 */
	label?: string
	/**
	 * Side on which the label is displayed
	 */
	labelSide?: ToggleTextSide
	/**
	 * Size of the toggle
	 */
	size?: ToggleSize
	/**
	 * Initial checked state of the toggle
	 */
	checked?: boolean
	/**
	 * Reference to the root HTMLDivElement of the toggle
	 */
	rootRef?: Ref<HTMLDivElement>
}
