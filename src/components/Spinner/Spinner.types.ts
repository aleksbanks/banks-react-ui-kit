import type { HTMLAttributes } from 'react'

export type SpinnerSize = 's' | 'm' | 'l' | 'xl'

export interface SpinnerProps extends HTMLAttributes<SVGElement> {
	size?: SpinnerSize
}
