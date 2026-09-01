import { useEffect } from 'react'
import type { RefObject } from 'react'

/**
 * Calls `handler` when a pointer event happens outside of the referenced element.
 *
 * @param ref - Element to treat as "inside"
 * @param handler - Click / tap outside callback
 */
export const useOnClickOutside = <T extends HTMLElement>(
	ref: RefObject<T>,
	handler: (event: MouseEvent | TouchEvent) => void,
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) return
			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [handler, ref])
}
