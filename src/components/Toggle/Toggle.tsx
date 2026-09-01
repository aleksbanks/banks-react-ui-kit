import React, { forwardRef, useMemo, useRef } from 'react'

import { Typography } from 'components/Typography'
import { useInputId } from 'hooks'
import { classNames, mergeRefs } from 'utils'

import type { ToggleProps } from '.'
import { typographyVariantByToggleSize } from './Toggle.const'

import styles from './Toggle.module.css'

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
	({ labelSide = 'right', disabled, checked, size = 'm', rootRef, id, label, className, ...props }, ref) => {
		const toggleRef = useRef<HTMLInputElement>(null)
		const fieldId = useInputId(id)

		const labelComponent = useMemo(() => {
			if (!label) return null
			return (
				<Typography as='span' fullWidth={false} variant={typographyVariantByToggleSize[size]}>
					{label}
				</Typography>
			)
		}, [label, size])

		return (
			<label
				htmlFor={fieldId}
				ref={rootRef}
				className={classNames(
					styles.toggleWrapper,
					labelSide === 'left' && styles.labelSideLeft,
					disabled && styles.disabledWrapper,
				)}
			>
				<input
					checked={checked}
					disabled={disabled}
					id={fieldId}
					ref={mergeRefs(ref, toggleRef)}
					{...props}
					aria-checked={typeof checked === 'boolean' ? checked : undefined}
					className={classNames(styles.hiddenCheckbox, className)}
					role='switch'
					type='checkbox'
				/>
				<span
					aria-hidden
					className={classNames(
						styles.toggle,
						styles[`toggle-${size}`],
						checked && styles.checkedToggle,
						disabled && styles.disabledToggle,
					)}
				>
					<span
						className={classNames(styles.slider, styles[`slider-${size}`], checked && styles[`checkedSlider-${size}`])}
					/>
				</span>
				{labelComponent}
			</label>
		)
	},
)

Toggle.displayName = 'Toggle'
