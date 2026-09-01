import type { HTMLAttributes } from 'react'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body-xl' | 'body-l' | 'body-m' | 'body-s' | 'body-xs'

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The typography variant to be used.
	 * This determines the font size, weight, and style of the text.
	 */
	variant?: TypographyVariant
	/**
	 * HTML tag to render. Defaults to a heading tag for `h1`–`h3` and `p` for body variants.
	 * Pass `span` when nesting inside a `label` or another paragraph.
	 */
	as?: TypographyElement
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
