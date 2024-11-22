import { useMemo } from 'react'

import { v4 } from 'uuid'

/**
 * A custom hook to generate a unique ID for an input element.
 * If an ID is provided, it will be used; otherwise, a new ID will be generated.
 *
 * @param id - The optional ID to use for the input element
 * @returns A unique ID for the input element
 */
export const useInputId = (id?: string): string => {
	return useMemo(() => id ?? `input_${v4()}`, [id])
}
