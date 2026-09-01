import { useId } from 'react'

/**
 * Returns a stable id for an input. Uses the given `id` when provided,
 * otherwise React's `useId()`.
 */
export const useInputId = (id?: string): string => {
	const generatedId = useId()
	return id ?? generatedId
}
