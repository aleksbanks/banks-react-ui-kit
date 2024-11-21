import type { HTMLAttributes } from 'react'

import type { Size } from 'common/types'

export type SpinnerSize = Exclude<Size, 'xs'>

export interface SpinnerProps extends HTMLAttributes<SVGElement> {
	size?: SpinnerSize
}
