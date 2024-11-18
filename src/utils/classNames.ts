/**
 * Concatenates multiple class names into a single string, ignoring falsy values.
 *
 * @param names Variable number of class names to concatenate.
 * @returns A single string containing the concatenated class names.
 */
export const classNames = (
	...names: Array<string | undefined | false> // Variable number of class names
) => names.filter(Boolean).join(' ')
