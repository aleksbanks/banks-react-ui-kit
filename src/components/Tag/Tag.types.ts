import React, { HTMLAttributes } from 'react'

import type { Size, Status } from 'types/common.types'

export type TagSize = Extract<Size, 'xs' | 's' | 'm'>
export type TagStatus = Status

export type TagProps = HTMLAttributes<HTMLDivElement> & {
	/**
	 * The text to be displayed within the tag.
	 */
	text: string
	/**
	 * An optional icon to be displayed at the start of the tag
	 */
	startIcon?: React.ReactNode
	/**
	 * An optional icon to be displayed at the end of the tag
	 */
	endIcon?: React.ReactNode
	/**
	 * The size of the tag
	 * @default 'm'
	 */
	size?: TagSize
	/**
	 * The status of the tag
	 * @default 'neutral'
	 */
	status?: TagStatus
	/**
	 * The color of the tag. Can be any valid CSS color string (will also apply to border)
	 */
	color?: string
	/**
	 * The background color of the tag. Can be any valid CSS color string
	 */
	bgColor?: string
	/**
	 * Whether the tag is currently selected
	 * @default false
	 */
	isSelected?: boolean
	/**
	 * Whether the tag is disabled
	 * @default false
	 */
	disabled?: boolean
}
