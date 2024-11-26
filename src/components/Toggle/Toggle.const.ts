import type { ToggleSize } from './Toggle.types'
import type { TypographyVariant } from '../Typography/Typography.types'

export const typographyVariantByToggleSize: Record<ToggleSize, TypographyVariant> = {
	s: 'body-m',
	m: 'body-xl',
}
