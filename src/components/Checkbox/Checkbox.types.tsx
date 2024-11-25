import type { InputHTMLAttributes, ReactNode, Ref } from 'react'

import type { ImageProps, Position, Size, Status } from 'types/common.types'

export type CheckboxTextSide = Extract<Position, 'right' | 'left'>

export type CheckboxStatus = Status

export type CheckboxSize = Extract<Size, 's' | 'm'>

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
	/** Label text near checkbox */
	label?: ReactNode

	/** Side where label will be placed  */
	labelSide?: CheckboxTextSide

	/** Checkbox status */
	status?: CheckboxStatus

	/** Is checked */
	checked?: boolean

	/** Image placed near label*/
	image?: ImageProps

	/** Size of checkbox */
	size?: CheckboxSize

	rootRef?: Ref<HTMLLabelElement>
}
