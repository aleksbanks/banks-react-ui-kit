import type { TagSize } from './Tag.types'
import type { TypographyVariant } from '../Typography/Typography.types'

export const typographyVariantByTagSize: Record<TagSize, TypographyVariant> = {
	xs: 'body-xs',
	s: 'body-m',
	m: 'body-xl',
}
