import React, { forwardRef } from 'react'

import { classNames } from 'utils'

import { typographyVariantByTagSize } from './Tag.const'
import type { TagProps } from './Tag.types'
import { Typography } from '../Typography'

import styles from './Tag.module.css'

export const Tag = forwardRef<HTMLElement, TagProps>(
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
			onClick,
			className,
			...props
		},
		ref,
	) => {
		const isInteractive = Boolean(onClick)
		const classNamesList = classNames(
			styles.tag,
			isSelected && styles.tagSelected,
			disabled && styles.tagDisabled,
			isInteractive && styles.tagInteractive,
			styles[`tag-${size}`],
			isSelected ? styles[`tagSelected-${status}`] : styles[`tag-${status}`],
			className,
		)
		const content = (
			<>
				{startIcon && (
					<span aria-hidden className={classNames(styles.icon, styles[`icon-${size}`])}>
						{startIcon}
					</span>
				)}
				<Typography as='span' variant={typographyVariantByTagSize[size]}>
					{text}
				</Typography>
				{endIcon && (
					<span aria-hidden className={classNames(styles.icon, styles[`icon-${size}`])}>
						{endIcon}
					</span>
				)}
			</>
		)

		return React.createElement(
			isInteractive ? 'button' : 'span',
			{
				...props,
				ref,
				className: classNamesList,
				style: {
					backgroundColor: bgColor,
					color,
					borderColor: color,
				},
				...(isInteractive
					? {
							type: 'button',
							disabled,
							'aria-pressed': isSelected,
							onClick,
					  }
					: {
							'aria-disabled': disabled || undefined,
					  }),
			},
			content,
		)
	},
)

Tag.displayName = 'Tag'
