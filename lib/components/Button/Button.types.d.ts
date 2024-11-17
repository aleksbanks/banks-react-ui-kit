export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonProps = {
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};
