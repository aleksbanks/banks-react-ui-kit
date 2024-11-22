import type { ForwardedRef, RefCallback } from 'react'

/**
 * Merges multiple React refs into a single ref callback.
 *
 * This function is useful when you need to merge refs from different sources,
 * such as from a parent component and from a hook like `useRef`.
 *
 * @param refs - The refs to merge. Each ref can be either a `ForwardedRef` or a callback function.
 * @returns A single ref callback that will call all the provided refs.
 */
export const mergeRefs = <T>(...refs: (ForwardedRef<T> | undefined)[]): RefCallback<T> => {
	return (node: T) => {
		refs.forEach((ref) => {
			if (!ref) return

			// if ref is callback
			if (typeof ref === 'function') {
				ref(node)
				return
			}

			// if ref is from useRef
			if ('current' in ref) {
				ref.current = node
			}
		})
	}
}
