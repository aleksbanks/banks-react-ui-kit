import React from 'react'

import styles from './RequiredIcon.module.css'

/**
 * Visual required marker. Hidden from assistive tech — set `required` / `aria-required` on the control instead.
 */
export const RequiredIcon = () => {
	return (
		<span aria-hidden className={styles.requiredIcon}>
			*
		</span>
	)
}
