import type { HTMLAttributes } from 'react'
import type { Size } from 'types/common.types'

export type DotsLoaderSize = Extract<Size,'s' | 'm'>

export interface DotsLoaderProps extends HTMLAttributes<HTMLDivElement> {
	size?: DotsLoaderSize;
}
