import React, { type ForwardedRef, forwardRef } from 'react'

import { classNames } from 'utils'

import type { RadioGroupProps } from './RadioGroup.types'
import { RadioButton } from '../RadioButton'
import { typographyVariantByRadioButtonSize } from '../RadioButton/RadioButton.const'
import { RequiredIcon } from '../RequiredIcon'
import { Typography } from '../Typography'

import styles from './RadioGroup.module.css'

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
	(
		{ size = 'm', labelSide = 'left', items, groupLabel, onChange, selectedValue, required, ...props }: RadioGroupProps,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		return (
			<div className={classNames(styles.radioGroup, labelSide === 'top' && styles.topLabel)} ref={ref} {...props}>
				<Typography fullWidth={false} variant={typographyVariantByRadioButtonSize[size]}>
					{groupLabel}
					{required && <RequiredIcon />}
				</Typography>

				<div className={styles.groupWrapper}>
					{items.map((radio) => {
						return (
							<RadioButton
								{...radio}
								checked={radio.value === selectedValue}
								key={radio.label}
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
