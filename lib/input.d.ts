declare module "baseui/input" {
  export type STATE_CHANGE_TYPE = {
    change: "change";
  };

  export type CUSTOM_INPUT_TYPE = {
    textarea: "textarea";
  };

  export type ADJOINED = {
    none: "none";
    left: "left";
    right: "right";
    both: "both";
  };

  export type SIZE = {
    default: "default";
    compact: "compact";
  };

  export type ENHANCER_POSITION = {
    start: "start";
    end: "end";
  };

  export type AdjoinedT = keyof ADJOINED;

  export type SizeT = keyof SIZE;

  export type StateTypeT = keyof STATE_CHANGE_TYPE;

  export type InternalStateT = {
    /** Renders UI in 'focus' state */
    isFocused?: boolean;
  };

  export type StateT = {
    value?: string;
  };

  export type StateReducerT = (
    stateType: StateTypeT,
    nextState: StateT,
    currentState: StateT
  ) => StateT;

  export type SharedPropsT = {
    /** Renders UI in 'focus' state */
    $isFocused: boolean;
    /** Renders UI in 'disabled' state */
    $disabled: boolean;
    /** Renders UI in 'error' state */
    $error: boolean;
    /** Defines styles for inputs that are grouped with other controls. */
    $adjoined: AdjoinedT;
    /** Renders UI in provided size. */
    $size: SizeT;
    /** Renders UI in 'required' state */
    $required: boolean;
    $theme: ThemeT;
  };

  export type PropsT = any;

  export type BaseInputComponentsT<T> = {
    InputContainer?: OverrideT<T>;
    Input?: OverrideT<T>;
    Before?: OverrideT<T>;
    After?: OverrideT<T>;
  };

  export type InputComponentsT<T> = BaseInputComponentsT<T> & {
    Root?: OverrideT<T>;
    StartEnhancer?: OverrideT<T>;
    EndEnhancer?: OverrideT<T>;
  };

  export type BaseInputPropsT<T> = {
    /** Sets aria-label attribute. */
    "aria-label"?: string;
    /** Sets aria-labelledby attribute. */
    "aria-labelledby"?: string;
    /** Sets aria-describedby attribute. */
    "aria-describedby"?: string;
    /** Defines styles for inputs that are grouped with other controls. */
    adjoined?: AdjoinedT;
    /** Determines if browser should provide value suggestions. */
    autoComplete?: string;
    /** If true the input will be focused on the first mount. */
    autoFocus?: boolean;
    /** Renders UI in 'disabled' state. */
    disabled?: boolean;
    /** Renders UI in 'error' state. */
    error?: boolean;
    /** Id attribute value to be added to the input element and as a label's for attribute value. */
    id?: string;
    "data-baseweb"?: string;
    $ref?: { current: HTMLInputElement | null };
    /** A ref to access an input element. */
    inputRef?: { current: HTMLInputElement | null };
    name?: string;
    onBlur?: (e: SyntheticFocusEvent<T>) => void;
    onChange?: (e: SyntheticInputEvent<T>) => void;
    onKeyDown?: (e: SyntheticKeyboardEvent<T>) => void;
    onKeyPress?: (e: SyntheticKeyboardEvent<T>) => void;
    onKeyUp?: (e: SyntheticKeyboardEvent<T>) => void;
    onFocus?: (e: SyntheticFocusEvent<T>) => void;
    overrides?: BaseInputComponentsT<SharedPropsT>;
    placeholder?: string;
    /** Renders UI in 'required' state. */
    required?: boolean;
    /** Renders UI in provided size. */
    size?: SizeT;
    /** Input type attribute. */
    type?: string;
    /** Input value attribute. */
    value?: string;
    rows?: number;
  };

  export type InputPropsT = BaseInputPropsT<HTMLInputElement> & {
    overrides?: InputComponentsT<SharedPropsT>;
    /** An input helper rendered before and attached to the input field. */
    startEnhancer?: React.ReactNode | ((props: PropsT) => React.ReactNode);
    /** An input helper rendered after and attached to the input field. */
    endEnhancer?: React.ReactNode | ((props: PropsT) => React.ReactNode);
    onFocus?: (e: SyntheticFocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: SyntheticFocusEvent<HTMLInputElement>) => void;
  };

  export type StatefulContainerPropsT<T> = {
    children?: (props: PropsT) => React.ReactNode;
    /** Initial state of an uncontrolled input component. */
    initialState?: StateT;
    /** A state change handler. Used to override default state transitions. */
    stateReducer?: StateReducerT;
    onChange?: (e: SyntheticInputEvent<T>) => void;
  };

  type OmitPropsT = {
    overrides: InputComponentsT<SharedPropsT>;
    children: (props: any) => React.ReactNode;
  };

  type FullStPropsT = InputPropsT & StatefulContainerPropsT<HTMLInputElement>;

  type StInputPropsDiffT = Exclude<FullStPropsT, keyof OmitPropsT>;

  export type StatefulInputPropsT = StInputPropsDiffT & {
    overrides?: InputComponentsT;
  };

  export class StatefulInput extends React.Component<StatefulInputPropsT> {}
}
