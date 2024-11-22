import type { CheckboxSize } from './Checkbox.types'
import type { TypographyVariant } from '../Typography/Typography.types'

export const typographyVariantByCheckboxSize: Record<CheckboxSize, TypographyVariant> = {
	s: 'body-m',
	m: 'body-xl',
}
