import React, { forwardRef, useEffect, useMemo, useRef } from 'react'

import { useInputId } from 'hooks/useInputId'
import { classNames } from 'utils/classNames'
import { mergeRefs } from 'utils/mergeRefs'

import { typographyVariantByCheckboxSize } from './Checkbox.const'
import type { CheckboxProps } from './Checkbox.types'
import { RequiredIcon } from '../RequiredIcon'
import { Typography } from '../Typography'

import styles from './styles.module.css'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			labelSide = 'right',
			size = 'm',
			status = 'neutral',
			disabled,
			rootRef,
			checked,
			id,
			label,
			image,
			required,
			...props
		},
		ref?,
	) => {
		const checkboxRef = useRef<HTMLInputElement>(null)
		const fieldId = useInputId(id)

		useEffect(() => {
			if (!checkboxRef.current) return

			if (checked) {
				checkboxRef.current.checked = true
				return
			}

			checkboxRef.current.checked = false
		}, [checked])

		const labelComponent = useMemo(
			() => (
				<div className={styles.labelComponent}>
					{image && <img alt={image.alt} className={styles[`image-${size}`]} src={image.src} />}
					<Typography variant={typographyVariantByCheckboxSize[size]}>
						{label}
						{required && <RequiredIcon />}
					</Typography>
				</div>
			),
			[image, label, required, size],
		)

		return (
			<label
				className={classNames(styles.checkboxWrapper, labelSide === 'left' && styles.labelSideLeft)}
				htmlFor={fieldId}
				ref={rootRef}
			>
				<input
					aria-disabled={disabled}
					className={classNames(styles.checkbox, styles[`checkbox-${size}`], styles[`checkbox-${status}`])}
					disabled={disabled}
					id={fieldId}
					ref={mergeRefs(ref, checkboxRef)}
					type='checkbox'
					{...props}
				/>
				{label && labelComponent}
			</label>
		)
	},
)

Checkbox.displayName = 'Checkbox'
