import React, { forwardRef, useMemo, useRef } from 'react'

import { Typography } from 'components/Typography'
import { useInputId } from 'hooks'
import { classNames, mergeRefs } from 'utils'

import type { ToggleProps } from '.'
import { typographyVariantByToggleSize } from './Toggle.const'

import styles from './Toggle.module.css'

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
	({ labelSide = 'right', disabled, checked, size = 'm', rootRef, id, label, ...props }, ref) => {
		const toggleRef = useRef<HTMLInputElement>(null)
		const fieldId = useInputId(id)

		const labelComponent = useMemo(() => {
			if (!label) return null
			return (
				<Typography fullWidth={false} variant={typographyVariantByToggleSize[size]}>
					{label}
				</Typography>
			)
		}, [label, size])

		return (
			<div
				ref={rootRef}
				className={classNames(
					styles.toggleWrapper,
					labelSide === 'left' && styles.labelSideLeft,
					disabled && styles.disabledWrapper,
				)}
			>
				<label>
					<input
						checked={checked}
						className={styles.hiddenCheckbox}
						disabled={disabled}
						id={fieldId}
						ref={mergeRefs(ref, toggleRef)}
						type='checkbox'
						{...props}
					/>
					<div
						className={classNames(
							styles.toggle,
							styles[`toggle-${size}`],
							checked && styles.checkedToggle,
							disabled && styles.disabledToggle,
						)}
					>
						<div
							className={classNames(
								styles.slider,
								styles[`slider-${size}`],
								checked && styles[`checkedSlider-${size}`],
							)}
						/>
					</div>
				</label>
				{labelComponent}
			</div>
		)
	},
)

Toggle.displayName = 'Toggle'
