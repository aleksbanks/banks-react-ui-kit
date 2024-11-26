import type { RadioButtonProps } from 'components/RadioButton'
import type { Position } from 'types/common.types'

export type RadioItem<Value = string | number> = Omit<RadioButtonProps, 'value'> & {
	value: Value
}

export interface RadioGroupProps<Value = string | number> extends Pick<RadioButtonProps, 'size'> {
	/**
	 * Label for the radio group
	 */
	groupLabel?: string
	/**
	 * Position of the label of the radio group
	 */
	labelSide?: Extract<Position, 'left' | 'top'>
	/**
	 * Array of radio items.
	 * Each item should have a unique value
	 */
	items: RadioItem<Value>[]
	/**
	 * Currently selected value of the radio group
	 */
	selectedValue: Value
	/**
	 * Whether it's required to have at least one selected value in the group
	 */
	required?: boolean

	/**
	 * Callback function called when the selected value changes.
	 * @param newValue The newly selected value.
	 */
	onChange: (newValue: Value) => void
}
