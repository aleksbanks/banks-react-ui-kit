import React, { forwardRef, useMemo, useRef } from 'react'

import { Typography } from 'components/Typography'
import { useInputId } from 'hooks'
import { classNames, mergeRefs } from 'utils'

import type { RadioButtonProps } from '.'
import { typographyVariantByRadioButtonSize } from './RadioButton.const'

import styles from './RadioButton.module.css'

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
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
			className,
			...props
		},
		ref?,
	) => {
		const radioButtonRef = useRef<HTMLInputElement>(null)
		const fieldId = useInputId(id)

		const labelComponent = useMemo(() => {
			return (
				<label className={styles.imageAndLabelWrapper} htmlFor={fieldId}>
					{image && (
						<img alt={image.alt ?? ''} className={classNames(styles.image, styles[`image-${size}`])} src={image.src} />
					)}
					<Typography as='span' variant={typographyVariantByRadioButtonSize[size]}>
						{label}
					</Typography>
				</label>
			)
		}, [fieldId, image, label, size])

		return (
			<div
				className={classNames(styles.radioButtonWrapper, labelSide === 'left' && styles.labelSideLeft)}
				ref={rootRef}
			>
				<input
					checked={checked}
					disabled={disabled}
					id={fieldId}
					ref={mergeRefs(ref, radioButtonRef)}
					{...props}
					type='radio'
					className={classNames(
						styles.radioButton,
						styles[`radioButton-${size}`],
						styles[`radioButton-${status}`],
						className,
					)}
				/>
				{label && labelComponent}
			</div>
		)
	},
)

RadioButton.displayName = 'RadioButton'
