import type { ButtonRadius, ButtonSize, ButtonVariant } from './Button.types'

import styles from './styles.module.css'

export const buttonClassByVariant: Record<ButtonVariant, string> = {
	primary: styles.primary,
	secondary: styles.secondary,
	tertiary: styles.tertiary,
}

export const buttonClassBySize: Record<ButtonSize, string> = {
	s: styles.small,
	m: styles.medium,
	l: styles.large,
}

export const buttonClassByRadius: Record<ButtonRadius, string> = {
	square: styles.square,
	round: styles.round,
}
