import type { ButtonRadius, ButtonSize, ButtonVariant } from './Button.types'
import type { SpinnerSize } from '../Spinner/Spinner.types'

import styles from './styles.module.css'

export const buttonClassByVariant: Record<ButtonVariant, string> = {
	primary: styles.primary,
	secondary: styles.secondary,
	tertiary: styles.tertiary,
}

export const buttonClassBySize: Record<ButtonSize, string> = {
	small: styles.small,
	medium: styles.medium,
	large: styles.large,
}

export const buttonClassByRadius: Record<ButtonRadius, string> = {
	square: styles.square,
	round: styles.round,
}

export const buttonIconSizes: Record<ButtonSize, SpinnerSize> = {
	small: 's',
	medium: 'm',
	large: 'l',
}
