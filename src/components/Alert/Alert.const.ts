import type { AlertPosition, AlertSize, AlertStatus } from './Alert.types'
import type { TypographyVariant } from 'components/Typography/Typography.types'

import styles from './Alert.module.css'

export const titleVariantBySize: Record<AlertSize, TypographyVariant> = {
	m: 'body-m',
	l: 'body-l',
}

export const textVariantBySize: Record<AlertSize, TypographyVariant> = {
	m: 'body-s',
	l: 'body-m',
}

export const alertClassByPosition: Record<AlertPosition, string> = {
	'top-left': styles.topLeft,
	'top-center': styles.topCenter,
	'top-right': styles.topRight,
	'bottom-left': styles.bottomLeft,
	'bottom-center': styles.bottomCenter,
	'bottom-right': styles.bottomRight,
}

export const alertClassBySize: Record<AlertSize, string> = {
	m: styles.medium,
	l: styles.large,
}

export const alertClassByStatus: Record<AlertStatus, string> = {
	success: styles.success,
	info: styles.info,
	warning: styles.warning,
	error: styles.error,
	neutral: styles.neutral,
}

export const ALERT_DEFAULT_HIDE_MS = 5000
