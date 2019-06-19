declare module "baseui/button" {
  export const KIND = {
    primary: "primary" as "primary",
    secondary: "secondary" as "secondary",
    tertiary: "tertiary" as "tertiary",
    minimal: "minimal" as "minimal"
  };

  export type SHAPE = {
    default: "default";
    round: "round";
    square: "square";
  };

  export const SIZE = {
    default: "default",
    compact: "compact"
  };

  export type OverridesT<T> = {
    BaseButton?: OverrideT<T>;
    StartEnhancer?: OverrideT<T>;
    EndEnhancer?: OverrideT<T>;
    LoadingSpinnerContainer?: OverrideT<T>;
    LoadingSpinner?: OverrideT<T>;
  };

  export type ButtonProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    /** A helper rendered at the end of the button. */
    endEnhancer?: (props: SharedStyleProps) => React.ReactNode;
    /** Show loading button style and spinner. */
    isLoading?: boolean;
    /** Indicates that the button is selected */
    isSelected?: boolean;
    /** Defines the kind (purpose) of a button */
    kind?: keyof typeof KIND;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    overrides?: OverridesT<SharedStyleProps>;
    /** Defines the shape of the button */
    shape?: keyof typeof SHAPE;
    /** Defines the size of the button */
    size?: keyof typeof SIZE;
    /** A helper rendered at the start of the button. */
    startEnhancer?: (props: SharedStyleProps) => React.ReactNode;
  };

  export type SharedStyleProps = {
    $kind?: keyof typeof SIZE;
    $isSelected?: boolean;
    $shape?: keyof typeof SHAPE;
    $size?: keyof typeof SIZE;
    $isLoading?: boolean;
    $disabled?: boolean;
  };

  export class Button extends React.Component<ButtonProps> {}
  export const SHAPE: SHAPE;
}
