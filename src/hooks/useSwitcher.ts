import { useCallback, useState } from 'react'

/**
 * Custom hook for creating a switcher with on/off functionality.
 * @param defaultValue - The initial value of the switcher (default: false).
 * @returns An array containing the current value, on function, off function, and toggleValue function.
 */
export const useSwitcher = (defaultValue = false) => {
	const [value, setValue] = useState<boolean>(defaultValue)

	const on = useCallback(() => setValue(true), [])
	const off = useCallback(() => setValue(false), [])
	const toggleValue = useCallback(() => setValue((prevValue) => !prevValue), [])

	return [value, on, off, toggleValue] as const
}
