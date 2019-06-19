declare module "baseui/select" {
  import { SIZE } from "baseui/input";
  export type TYPE = {
    select: "select";
    search: "search";
  };

  export type STATE_CHANGE_TYPE = {
    select: "select";
    remove: "remove";
    clear: "clear";
  };
  export type ChangeActionT = keyof STATE_CHANGE_TYPE;
  export type SizeT = keyof SIZE;
  export type TypeT = keyof TYPE;

  export type OptionT = ReadOnly<{
    id?: string | number;
    label?: React.ReactNode;
    disabled?: boolean;
    clearableValue?: boolean;
    isCreatable?: boolean;
  }>;

  type OptionState = {
    $selected: boolean;
    $disabled: boolean;
    $isHighlighted: boolean;
  };

  export type ValueT = ReadOnly<OptionT[]>;

  export type OnChangeParamsT = {
    value: ValueT;
    option: OptionT;
    type: ChangeActionT;
  };

  export type OverridesT<T> = {
    Root?: OverrideT<T>;
    ControlContainer?: OverrideT<T>;
    Placeholder?: OverrideT<T>;
    ValueContainer?: OverrideT<T>;
    SingleValue?: OverrideT<T>;
    MultiValue?: OverrideT<T>;
    InputContainer?: OverrideT<T>;
    Input?: OverrideT<T>;
    IconsContainer?: OverrideT<T>;
    SelectArrow?: OverrideT<T>;
    ClearIcon?: OverrideT<T>;
    LoadingIndicator?: OverrideT<T>;
    SearchIcon?: OverrideT<T>;
    Popover?: OverrideT<T>;
    DropdownContainer?: OverrideT<T>;
    Dropdown?: OverrideT<T>;
    DropdownOption?: OverrideT<T>;
    DropdownListItem?: OverrideT<T>;
    OptionContent?: OverrideT<T>;
    StatefulMenu?: OverrideT<T>;
  };

  export type OverridesDropdownT<T> = {
    DropdownContainer?: OverrideT<T>;
    Dropdown?: OverrideT<T>;
    // Not a styled component
    DropdownOption?: OverrideT<T>;
    DropdownListItem?: OverrideT<T>;
    OptionContent?: OverrideT<T>;
    StatefulMenu?: OverrideT<T>;
  };

  export type PropsT = {
    "aria-label"?: string;
    "aria-describedby"?: string;
    "aria-labelledby"?: string;
    /** Defines if select element is focused on the first mount. */
    autoFocus?: boolean;
    /** Defines if options can be removed by pressing backspace. */
    backspaceRemoves?: boolean;
    /** Defines if the select value can be cleared. If true a clear icon is rendered when a value is set. */
    clearable?: boolean;
    /** Defines if the menu closes after a selection if made. */
    closeOnSelect?: boolean;
    /** Defines if new options can be created along with choosing existing options. */
    creatable?: boolean;
    /** Defines if options can be removed by pressing backspace. */
    deleteRemoves?: boolean;
    /** Defines if the control is disabled. */
    disabled?: boolean;
    /** Defines if the control if in error state. */
    error?: boolean;
    /** Defines if the value is cleared when escape is pressed and the dropdown is closed. */
    escapeClearsValue?: boolean;
    /** Defaults to filterOptions that excludes selected options for
     * multi select. A custom method to filter options to be displayed in the dropdown. */
    filterOptions?: (
      options: ValueT,
      filterValue: string,
      excludeOptions?: ValueT,
      newProps: { valueKey: string; labelKey: string }
    ) => ValueT;
    /** Defines if currently selected options are filtered out in the dropdown options. */
    filterOutSelected?: boolean;
    /** A custom method to get a display value for a dropdown option. */
    getOptionLabel?: (
      { option: OptionT, optionState: OptionState }
    ) => React.ReactNode;
    /** A custom method to get a display value for a selected option. */
    getValueLabel?: ({ option: OptionT }) => React.ReactNode;
    /** Defines if the select if in a loading (async) state. */
    isLoading?: boolean;
    /** Defines an option key for a default label value. */
    labelKey: string;
    /** Sets max height of the dropdown list. */
    maxDropdownHeight?: string;
    /** Defines if multiple options can be selected. */
    multi?: boolean;
    /** Message to be displayed if no options is found for a search query. */
    noResultsMsg?: React.ReactNode;
    onBlur?: (e: Event) => void;
    /** Defines if the input value is reset to an empty string when a blur event happens on the select. */
    onBlurResetsInput?: boolean;
    /** change handler of the select to be called when a value is changed. */
    onChange?: (params: OnChangeParamsT) => void;
    onFocus?: (e: SyntheticEvent<HTMLElement>) => void;
    onInputChange?: (e: SyntheticInputEvent<HTMLInputElement>) => void;
    /** Defines if the input value is reset to an empty string when dropdown is closed. */
    onCloseResetsInput?: boolean;
    /** Defines if the input value is reset to an empty string when a selection is made. */
    onSelectResetsInput?: boolean;
    /** A function that is called when the dropdown opens. */
    onOpen?: () => void;
    /** A function that is called when the dropdown closes. */
    onClose?: () => void;
    /** Defines if the dropdown opens on a click event on the select. */
    openOnClick?: boolean;
    /** Options to be displayed in the dropdown. If an option has a
     * disabled prop value set to true it will be rendered as a disabled option in the dropdown. */
    options?: ValueT;
    overrides?: OverridesT<SharedStylePropsArgT>;
    /** Sets the placeholder. */
    placeholder?: React.ReactNode;
    /** Defines if the select field is required to have a selection. */
    required?: boolean;
    /** Defines if the search functionality is enabled. */
    searchable?: boolean;
    /** Defines the size (scale) of dropdown menu items. See the Menu component API. */
    size?: SizeT;
    /** Defines type of the component to be in select or search mode.
     * When set to TYPE.search the search icon if rendered on the
     * left and the select arrow icon is not rendered. */
    type?: TypeT;
    /** A current selected value(s). If a selected value has a clearableValue
     * prop set to true it will be rendered as a disabled selected option that can't be cleared. */
    value?: ValueT;
    /** Defines a key name for an option's unique identifier value.
     * The value of the `valueKey` prop is used to identify what options are selected
     * or removed from the selection, it also used for default filtering out the
     * selected options from the dropdown list. */
    valueKey?: string;
    /** Where to mount the popover */
    mountNode?: HTMLElement;
  };

  export type SelectStateT = {
    inputValue: string;
    isFocused: boolean;
    isOpen: boolean;
    isPseudoFocused: boolean;
  };

  export type StateT = {
    value: ValueT;
  };

  export type StateReducerT = (
    stateType: string,
    nextState: StateT,
    currentState: StateT
  ) => StateT;

  export type StatefulContainerPropsT = {
    overrides: OverridesT<SharedStylePropsArgT>;
    children: (args: PropsT) => React.ReactNode;
    initialState: StateT;
    stateReducer: StateReducerT;
    onChange: (params: OnChangeParamsT) => void;
  };

  export type StatefulSelectPropsT = PropsT & {
    overrides?: OverridesT<SharedStylePropsArgT>;
    initialState?: StateT;
    stateReducer?: StateReducerT;
    onChange?: (params: OnChangeParamsT) => void;
  };

  export type DropdownPropsT = {
    error: boolean;
    getOptionLabel: (
      { option: OptionT, optionState: OptionState }
    ) => React.ReactNode;
    innerRef: { current: HTMLElement | null };
    isLoading: boolean;
    labelKey: string;
    maxDropdownHeight: string;
    multi: boolean;
    noResultsMsg?: React.ReactNode;
    onItemSelect: OnItemSelectFnT;
    options: ValueT;
    overrides?: OverridesDropdownT<SharedStylePropsArgT>;
    required: boolean;
    searchable: boolean;
    size: SizeT;
    type: TypeT;
    value: ValueT;
    valueKey: string;
    width?: number;
  };

  export type AutosizeInputOverridesT = {
    Input?: OverrideT<any>;
  };

  export type AutosizeInputPropsT = {
    value: string;
    defaultValue?: string;
    inputRef: () => void;
    overrides: AutosizeInputOverridesT;
  };

  export type AutosizeInputStateT = {
    inputWidth: number;
  };

  export type SharedStylePropsArgT = {
    $clearable: boolean;
    $creatable: boolean;
    $disabled: boolean;
    $error: boolean;
    $isFocused: boolean;
    $isLoading: boolean;
    $isOpen: boolean;
    $isPseudoFocused: boolean;
    $multi: boolean;
    $required: boolean;
    $searchable: boolean;
    $size: SizeT;
    $type: TypeT;
  };

  export type SharedStylePropsT = SharedStylePropsArgT & {
    $theme: ThemeT;
  };

  export class Select extends React.Component<PropsT> {}
  export class StatefulSelect extends React.Component<StatefulSelectPropsT> {}
}
