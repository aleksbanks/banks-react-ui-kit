import type { RadioButtonSize } from './RadioButton.types'
import type { TypographyVariant } from '../Typography/Typography.types'

export const typographyVariantByRadioButtonSize: Record<RadioButtonSize, TypographyVariant> = {
	s: 'body-m',
	m: 'body-xl',
}
