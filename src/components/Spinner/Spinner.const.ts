import type { SpinnerSize } from './Spinner.types'

import styles from './Spinner.module.css'

export const spinnerClassBySize: Record<SpinnerSize, string> = {
	s: styles.small,
	m: styles.medium,
	l: styles.large,
	xl: styles.xlarge,
}
