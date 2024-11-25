import React, { forwardRef } from 'react'
import { classNames } from 'utils'

import type { DotsLoaderProps } from './DotsLoader.types'

import styles from './DotsLoader.module.css'


export const DotsLoader = forwardRef<HTMLDivElement, DotsLoaderProps>(({ size = 'm', ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <span className={classNames(styles.dot, styles[`dot-${size}`])}/>
      <span className={classNames(styles.dot, styles[`dot-${size}`])}/>
      <span className={classNames(styles.dot, styles[`dot-${size}`])}/>
    </div>
  )
})
