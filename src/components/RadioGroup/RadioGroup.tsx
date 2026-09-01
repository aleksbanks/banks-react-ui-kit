import React, { type ForwardedRef, forwardRef } from 'react'

import { useInputId } from 'hooks'
import { classNames } from 'utils'

import type { RadioGroupProps } from './RadioGroup.types'
import { RadioButton } from '../RadioButton'
import { typographyVariantByRadioButtonSize } from '../RadioButton/RadioButton.const'
import { RequiredIcon } from '../RequiredIcon'
import { Typography } from '../Typography'

import styles from './RadioGroup.module.css'

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
	(
		{
			size = 'm',
			labelSide = 'left',
			items,
			groupLabel,
			onChange,
			selectedValue,
			required,
			className,
			...props
		}: RadioGroupProps,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		const groupId = useInputId()
		const labelId = `${groupId}-label`
		const groupName = `${groupId}-name`

		return (
			<div
				className={classNames(styles.radioGroup, labelSide === 'top' && styles.topLabel, className)}
				ref={ref}
				{...props}
				aria-labelledby={groupLabel ? labelId : props['aria-labelledby']}
				aria-required={required || undefined}
				role='radiogroup'
			>
				{groupLabel && (
					<Typography as='span' fullWidth={false} id={labelId} variant={typographyVariantByRadioButtonSize[size]}>
						{groupLabel}
						{required && <RequiredIcon />}
					</Typography>
				)}

				<div className={styles.groupWrapper}>
					{items.map((radio) => {
						return (
							<RadioButton
								{...radio}
								checked={radio.value === selectedValue}
								key={String(radio.value)}
								name={radio.name ?? groupName}
								size={size}
								onChange={() => onChange(radio.value)}
							/>
						)
					})}
				</div>
			</div>
		)
	},
)

RadioGroup.displayName = 'RadioGroup'
