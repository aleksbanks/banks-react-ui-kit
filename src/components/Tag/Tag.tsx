import React, { forwardRef } from 'react'

import { classNames } from 'utils'

import { typographyVariantByTagSize } from './Tag.const'
import type { TagProps } from './Tag.types'
import { Typography } from '../Typography'

import styles from './Tag.module.css'

export const Tag = forwardRef<HTMLDivElement, TagProps>(
	(
		{
			size = 'm',
			disabled = false,
			isSelected = false,
			status = 'neutral',
			color,
			bgColor,
			startIcon,
			endIcon,
			text,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={classNames(
					styles.tag,
					isSelected && styles.tagSelected,
					disabled && styles.tagDisabled,
					styles[`tag-${size}`],
					isSelected ? styles[`tagSelected-${status}`] : styles[`tag-${status}`],
				)}
				style={{
					backgroundColor: bgColor,
					color: color,
					borderColor: color,
				}}
				{...props}
			>
				{startIcon && <div className={classNames(styles.icon, styles[`icon-${size}`])}>{startIcon}</div>}
				<Typography variant={typographyVariantByTagSize[size]}>{text}</Typography>
				{endIcon && <div className={classNames(styles.icon, styles[`icon-${size}`])}>{endIcon}</div>}
			</div>
		)
	},
)

Tag.displayName = 'Tag'
