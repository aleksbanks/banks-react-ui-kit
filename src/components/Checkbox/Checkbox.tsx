import React, { forwardRef, useEffect, useMemo, useRef } from 'react'

import { useInputId } from 'hooks/useInputId'
import { classNames } from 'utils/classNames'
import { mergeRefs } from 'utils/mergeRefs'

import { typographyVariantByCheckboxSize } from './Checkbox.const'
import type { CheckboxProps } from './Checkbox.types'
import { RequiredIcon } from '../RequiredIcon'
import { Typography } from '../Typography'

import styles from './Checkbox.module.css'

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
			className,
			indeterminate = false,
			...props
		},
		ref?,
	) => {
		const checkboxRef = useRef<HTMLInputElement>(null)
		const fieldId = useInputId(id)

		useEffect(() => {
			if (!checkboxRef.current) return
			checkboxRef.current.indeterminate = indeterminate
		}, [indeterminate])

		const labelComponent = useMemo(
			() => (
				<span className={styles.labelComponent}>
					{image && (
						<img alt={image.alt ?? ''} className={classNames(styles.image, styles[`image-${size}`])} src={image.src} />
					)}
					<Typography as='span' variant={typographyVariantByCheckboxSize[size]}>
						{label}
						{required && <RequiredIcon />}
					</Typography>
				</span>
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
					disabled={disabled}
					id={fieldId}
					ref={mergeRefs(ref, checkboxRef)}
					{...props}
					checked={checked}
					className={classNames(styles.checkbox, styles[`checkbox-${size}`], styles[`checkbox-${status}`], className)}
					required={required}
					type='checkbox'
				/>
				{label && labelComponent}
			</label>
		)
	},
)

Checkbox.displayName = 'Checkbox'
