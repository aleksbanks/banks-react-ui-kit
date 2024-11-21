import type { HTMLAttributes } from 'react'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body-xl' | 'body-l' | 'body-m' | 'body-s' | 'body-xs'

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * The typography variant to be used.
	 * This determines the font size, weight, and style of the text.
	 */
	variant?: TypographyVariant
	/**
	 * The text content to be displayed.
	 */
	text?: string
	/**
	 * Whether the text should not wrap to the next line.
	 */
	noWrap?: boolean
	/**
	 * Whether the text should take up the full width of its container.
	 */
	fullWidth?: boolean
	/**
	 * The font weight of the text.
	 */
	fontWeight?: number
	/**
	 * The line height of the text.
	 */
	lineHeight?: number
}
