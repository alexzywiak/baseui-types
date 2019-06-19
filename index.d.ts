/// <reference types="react" />

type Diff<T, U> = import("./lib/utils").Diff<T, U>;
type KeyMirror<T> = import("./lib/utils").KeyMirror<T>;
type OverrideT<T> = import("./lib/utils").OverrideT<T>;
type Primitives = import("./lib/utils").Primitives;
type ResponsiveT<T> = import("./lib/utils").ResponsiveT<T>;
type Theme = import("./lib/utils").Theme;
type ThemeProps = import("./lib/utils").ThemeProps;

declare module "baseui" {
  export const LightTheme: Theme;
  export const DarkTheme: Theme;
  export const BaseProvider: React.ComponentType<{ theme: Theme }>;

  export function createTheme<T>(
    primitives: Primitives,
    overrides?: T
  ): Theme & T;

  export function styled<SharedProps>(
    component: keyof JSX.IntrinsicElements | React.ComponentType<SharedProps>,
    styledFn:
      | React.CSSProperties
      | ((args: ThemeProps & SharedProps) => React.CSSProperties)
  ): React.ComponentType<SharedProps>;
}

declare module "baseui/block" {
  export interface BlockPropsT {
    children?: React.ReactNode;
    /** Modifies the base element used to render the block. */
    as?: keyof JSX.IntrinsicElements;
    overrides?: OverridesT<StyledBlockPropsT>;
    /** Accepts all themeable color properties (`primary200`, etc.). */
    color?: ResponsiveT<string>;
    /** Accepts all themeable color properties (`primary200`, etc.). */
    backgroundColor?: ResponsiveT<string>;
    /** Accepts all themeable font properties (`font200`, etc.). */
    font?: string | string[];
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content */
    alignContent?: ResponsiveT<AlignContentT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items */
    alignItems?: ResponsiveT<AlignItemsT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
    alignSelf?: ResponsiveT<AlignSelfT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
    flexDirection?: ResponsiveT<FlexDirectionT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/display */
    display?: ResponsiveT<DisplayT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex */
    flex?: ResponsiveT<FlexT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid */
    grid?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area */
    gridArea?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns */
    gridAutoColumns?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow */
    gridAutoFlow?: ResponsiveT<GridAutoFlowT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows */
    gridAutoRows?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column */
    gridColumn?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end */
    gridColumnEnd?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap */
    gridColumnGap?: ResponsiveT<ScaleT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start */
    gridColumnStart?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap */
    gridGap?: ResponsiveT<ScaleT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row */
    gridRow?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end */
    gridRowEnd?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap */
    gridRowGap?: ResponsiveT<ScaleT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start */
    gridRowStart?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template */
    gridTemplate?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas */
    gridTemplateAreas?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns */
    gridTemplateColumns?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows */
    gridTemplateRows?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content */
    justifyContent?: ResponsiveT<JustifyContentT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items */
    justifyItems?: ResponsiveT<JustifyItemsT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self */
    justifySelf?: ResponsiveT<JustifySelfT>;
    position?: ResponsiveT<PositionT>;
    width?: ResponsiveT<ScaleT>;
    minWidth?: ResponsiveT<ScaleT>;
    maxWidth?: ResponsiveT<ScaleT>;
    height?: ResponsiveT<ScaleT>;
    minHeight?: ResponsiveT<ScaleT>;
    maxHeight?: ResponsiveT<ScaleT>;
    overflow?: ResponsiveT<OverflowT>;
    margin?: ResponsiveT<ScaleT>;
    marginTop?: ResponsiveT<ScaleT>;
    marginRight?: ResponsiveT<ScaleT>;
    marginBottom?: ResponsiveT<ScaleT>;
    marginLeft?: ResponsiveT<ScaleT>;
    padding?: ResponsiveT<ScaleT>;
    paddingTop?: ResponsiveT<ScaleT>;
    paddingRight?: ResponsiveT<ScaleT>;
    paddingBottom?: ResponsiveT<ScaleT>;
    paddingLeft?: ResponsiveT<ScaleT>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-content */
    placeContent?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-items */
    placeItems?: ResponsiveT<string>;
    /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-self */
    placeSelf?: ResponsiveT<string>;
    flexWrap?: ResponsiveT<boolean>;
    left?: ResponsiveT<ScaleT>;
    top?: ResponsiveT<ScaleT>;
    right?: ResponsiveT<ScaleT>;
    bottom?: ResponsiveT<ScaleT>;
  }
  export type ResponsiveT<T> = T | T[];

  type AlignContentT =
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "normal"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center"
    | "inherit"
    | "initial"
    | "unset";

  type AlignItemsT =
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center"
    | "inherit"
    | "initial"
    | "unset";

  type AlignSelfT =
    | "auto"
    | "normal"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe center"
    | "unsafe center"
    | "inherit"
    | "initial"
    | "unset";

  type FlexDirectionT =
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "inherit"
    | "initial"
    | "unset";

  type FlexT = number | string;

  type DisplayT =
    | "block"
    | "inline"
    | "run-in"
    | "flow"
    | "flow-root"
    | "table"
    | "flex"
    | "grid"
    | "ruby"
    | "block flow"
    | "inline table"
    | "flex run-in"
    | "list-item"
    | "list-item block"
    | "list-item inline"
    | "list-item flow"
    | "list-item flow-root"
    | "list-item block flow"
    | "list-item block flow-root"
    | "flow list-item block"
    | "table-row-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row"
    | "table-cell"
    | "table-column-group"
    | "table-column"
    | "table-caption"
    | "ruby-base"
    | "ruby-text"
    | "ruby-base-container"
    | "ruby-text-container"
    | "contents"
    | "none"
    | "inline-block"
    | "inline-table"
    | "inline-flex"
    | "inline-grid"
    | "inherit"
    | "initial"
    | "unset";

  type GridAutoFlowT =
    | "row"
    | "column"
    | "dense"
    | "row dense"
    | "column dense"
    | "inherit"
    | "initial"
    | "unset";

  type JustifyContentT =
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center"
    | "inherit"
    | "initial"
    | "unset";

  type JustifyItemsT =
    /* Basic keywords */
    | "auto"
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center"
    | "legacy right"
    | "legacy left"
    | "legacy center"
    | "inherit"
    | "initial"
    | "unset";

  type JustifySelfT =
    | "auto"
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center"
    | "inherit"
    | "initial"
    | "unset";

  type PositionT = "static" | "absolute" | "relative" | "fixed" | "sticky";

  type OverflowT =
    | "visible"
    | "hidden"
    | "scroll"
    | "scrollX"
    | "scrollY"
    | "auto"
    | "inherit"
    | "initial"
    | "unset";

  export type ScaleT = 0 | string;

  export type OverridesT<T> = {
    Block?: OverrideT<T>;
  };

  export type StyledBlockPropsT = {
    $as?: keyof JSX.IntrinsicElements;
    $color?: ResponsiveT<string>;
    $backgroundColor?: ResponsiveT<string>;
    $font?: ResponsiveT<string>;
    $alignContent?: ResponsiveT<AlignContentT>;
    $alignItems?: ResponsiveT<AlignItemsT>;
    $alignSelf?: ResponsiveT<AlignSelfT>;
    $flexDirection?: ResponsiveT<FlexDirectionT>;
    $display?: ResponsiveT<DisplayT>;
    $flex?: ResponsiveT<FlexT>;
    $grid?: ResponsiveT<string>;
    $gridArea?: ResponsiveT<string>;
    $gridAutoColumns?: ResponsiveT<string>;
    $gridAutoFlow?: ResponsiveT<GridAutoFlowT>;
    $gridAutoRows?: ResponsiveT<string>;
    $gridColumn?: ResponsiveT<string>;
    $gridColumnEnd?: ResponsiveT<string>;
    $gridColumnGap?: ResponsiveT<ScaleT>;
    $gridColumnStart?: ResponsiveT<string>;
    $gridGap?: ResponsiveT<ScaleT>;
    $gridRow?: ResponsiveT<string>;
    $gridRowEnd?: ResponsiveT<string>;
    $gridRowGap?: ResponsiveT<ScaleT>;
    $gridRowStart?: ResponsiveT<string>;
    $gridTemplate?: ResponsiveT<string>;
    $gridTemplateAreas?: ResponsiveT<string>;
    $gridTemplateColumns?: ResponsiveT<string>;
    $gridTemplateRows?: ResponsiveT<string>;
    $justifyContent?: ResponsiveT<JustifyContentT>;
    $justifyItems?: ResponsiveT<JustifyItemsT>;
    $justifySelf?: ResponsiveT<JustifySelfT>;
    $position?: ResponsiveT<PositionT>;
    $width?: ResponsiveT<ScaleT>;
    $minWidth?: ResponsiveT<ScaleT>;
    $maxWidth?: ResponsiveT<ScaleT>;
    $height?: ResponsiveT<ScaleT>;
    $minHeight?: ResponsiveT<ScaleT>;
    $maxHeight?: ResponsiveT<ScaleT>;
    $overflow?: ResponsiveT<OverflowT>;
    $margin?: ResponsiveT<ScaleT>;
    $marginTop?: ResponsiveT<ScaleT>;
    $marginRight?: ResponsiveT<ScaleT>;
    $marginBottom?: ResponsiveT<ScaleT>;
    $marginLeft?: ResponsiveT<ScaleT>;
    $padding?: ResponsiveT<ScaleT>;
    $paddingTop?: ResponsiveT<ScaleT>;
    $paddingRight?: ResponsiveT<ScaleT>;
    $paddingBottom?: ResponsiveT<ScaleT>;
    $paddingLeft?: ResponsiveT<ScaleT>;
    $placeContent?: ResponsiveT<string>;
    $placeItems?: ResponsiveT<string>;
    $placeSelf?: ResponsiveT<string>;
    $flexWrap?: ResponsiveT<boolean>;
    $left?: ResponsiveT<ScaleT>;
    $top?: ResponsiveT<ScaleT>;
    $right?: ResponsiveT<ScaleT>;
    $bottom?: ResponsiveT<ScaleT>;
  };

  export class Block extends React.Component<BlockPropsT> {}
}

declare module "baseui/breadcrumbs" {
  type OverridesT<T> = {
    Root?: OverrideT<T>;
    Separator?: OverrideT<T>;
    Icon?: OverrideT<T>;
  };

  export type BreadcrumbsPropsT = {
    children?: React.ReactNode;
    overrides?: OverridesT<{}>;
    ariaLabel?: string;
  };

  export class Breadcrumbs extends React.Component<BreadcrumbsPropsT> {}
  export class StyledRoot extends React.Component {}
  export class StyledSeperator extends React.Component {}
}

declare module "baseui/button" {
  type KIND = "primary" | "secondary" | "tertiary" | "minimal";
  type SHAPE = "default" | "round" | "square";
  type SIZE = "default" | "compact";

  export type OverridesT<T> = {
    BaseButton?: OverrideT<T>;
    StartEnhancer?: OverrideT<T>;
    EndEnhancer?: OverrideT<T>;
    LoadingSpinnerContainer?: OverrideT<T>;
    LoadingSpinner?: OverrideT<T>;
  };

  export type ButtonPropsT = {
    children?: React.ReactNode;
    disabled?: boolean;
    /** A helper rendered at the end of the button. */
    endEnhancer?: (props: SharedStyleProps) => React.ReactNode;
    /** Show loading button style and spinner. */
    isLoading?: boolean;
    /** Indicates that the button is selected */
    isSelected?: boolean;
    /** Defines the kind (purpose) of a button */
    kind?: KIND;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    overrides?: OverridesT<SharedStyleProps>;
    /** Defines the shape of the button */
    shape?: SHAPE;
    /** Defines the size of the button */
    size?: SIZE;
    /** A helper rendered at the start of the button. */
    startEnhancer?: (props: SharedStyleProps) => React.ReactNode;
  };

  export type SharedStyleProps = {
    $kind?: SIZE;
    $isSelected?: boolean;
    $shape?: SHAPE;
    $size?: SIZE;
    $isLoading?: boolean;
    $disabled?: boolean;
  };

  export class Button extends React.Component<ButtonPropsT> {}
  export class StyledBaseButton extends React.Component<SharedStyleProps> {}
  export class StyledStartEnhancer extends React.Component<SharedStyleProps> {}
  export class StyledEndEnhancer extends React.Component<SharedStyleProps> {}
  export class StyledLoadingSpinner extends React.Component<SharedStyleProps> {}
  export class StyledLoadingSpinnerContainer extends React.Component<
    SharedStyleProps
  > {}
  export const KIND: KeyMirror<KIND>;
  export const SIZE: KeyMirror<SIZE>;
  export const SHAPE: KeyMirror<SHAPE>;
}

declare module "baseui/flex-grid" {
  import { BlockPropsT, ScaleT } from "baseui/block";
  export type FlexGridPropsT = {
    /** Number of equal-width columns to allow for */
    flexGridColumnCount?: ResponsiveT<number>;
    /** Grid gap between columns */
    flexGridColumnGap?: ResponsiveT<ScaleT>;
    /** Grid gap between rows */
    flexGridRowGap?: ResponsiveT<ScaleT>;
  } & BlockPropsT;

  export type FlexGridItemPropsT = FlexGridPropsT;
  export class FlexGrid extends React.Component<FlexGridPropsT> {}
  export class FlexGridItem extends React.Component<FlexGridItemPropsT> {}
}

declare module "baseui/header-navigation" {
  type ALIGN = "center" | "left" | "right";
  export type OverridesT<T> = {
    Root?: OverrideT<T>;
  };

  export type PropsT = {
    overrides?: OverridesT<{}>;
  };

  export class HeaderNavigation extends React.Component<PropsT> {}
  export class StyledRoot extends React.Component<{}> {}
  export class StyledNavigationItem extends React.Component<{}> {}
  export class StyledNavigationList extends React.Component<{
    $align: ALIGN;
  }> {}
  export const ALIGN: KeyMirror<ALIGN>;
}
declare module "baseui/icon" {
  export type OverridesT = {
    Svg?: OverrideT<StyledComponentArgsT>;
  };

  export type SizeT = number | string;
  export type ColorT = string;

  export type StyledComponentArgsT = {
    $size?: SizeT;
    $color?: ColorT;
  };

  export type IconPropsT = {
    children?: React.ReactNode;
    /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
    size?: SizeT;
    /** Color of icon, will be used as svg fill */
    color?: ColorT;
    /** Allows you to set the SVG `<title>` label, which is used for accessibility */
    title?: string;
    overrides?: OverridesT;
  };

  export class Icon extends React.Component<IconPropsT> {}
  export class StyledSvg extends React.Component<StyledComponentArgsT> {}
}

declare module "baseui/icon/chevron-left" {
  export { Icon as default } from "baseui/icon";
}

declare module "baseui/icon/delete" {
  export { Icon as default } from "baseui/icon";
}

declare module "baseui/icon/delete-alt" {
  export { Icon as default } from "baseui/icon";
}

declare module "baseui/icon/plus" {
  export { Icon as default } from "baseui/icon";
}

declare module "baseui/input" {
  type STATE_CHANGE_TYPE = "change";

  type CUSTOM_INPUT_TYPE = "textarea";

  type ADJOINED = "none" | "left" | "right" | "both";

  type SIZE = "default" | "compact";

  type ENHANCER_POSITION = "start" | "end";

  export type AdjoinedT = ADJOINED;

  export type SizeT = SIZE;

  export type StateTypeT = STATE_CHANGE_TYPE;

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
    /** Renders UI in 'positive' state */
    $positive: boolean;
    /** Defines styles for inputs that are grouped with other controls. */
    $adjoined: AdjoinedT;
    /** Renders UI in provided size. */
    $size: SizeT;
    /** Renders UI in 'required' state */
    $required: boolean;
    $position: ENHANCER_POSITION;
  };

  // TODO - Fix This
  export type PropsT = any;

  export type BaseInputComponentsT = {
    InputContainer?: OverrideT<SharedPropsT>;
    Input?: OverrideT<SharedPropsT>;
    Before?: OverrideT<SharedPropsT>;
    After?: OverrideT<SharedPropsT>;
  };

  export type InputComponentsT = {
    Root?: OverrideT<SharedPropsT>;
    StartEnhancer?: OverrideT<SharedPropsT>;
    EndEnhancer?: OverrideT<SharedPropsT>;
  } & BaseInputComponentsT;

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
    /** Renders component in 'disabled' state. */
    disabled?: boolean;
    /** Renders component in 'error' state. */
    error?: boolean;
    /** Renders component in 'positive' state. */
    positive?: boolean;
    /** Id attribute value to be added to the input element and as a label's for attribute value. */
    id?: string;
    "data-baseweb"?: string;
    /** A  hint as to the type of data that might be entered by the user while editing the element or its contents. */
    inputMode?: string;
    /** A ref to access an input element. */
    inputRef?: React.Ref<HTMLInputElement | null>;
    name?: string;
    onBlur?: (e: React.ChangeEvent<T>) => void;
    onChange?: (e: React.ChangeEvent<T>) => void;
    onKeyDown?: (e: React.KeyboardEvent<T>) => void;
    onKeyPress?: (e: React.KeyboardEvent<T>) => void;
    onKeyUp?: (e: React.KeyboardEvent<T>) => void;
    onFocus?: (e: React.ChangeEvent<T>) => void;
    overrides?: BaseInputComponentsT;
    placeholder?: string;
    /** Renders component in 'required' state. */
    required?: boolean;
    /** Renders component in provided size. */
    size?: SizeT;
    /** Input type attribute. */
    type?: string;
    /** Input value attribute. */
    value?: string;
    rows?: number;
  };

  export type InputPropsT = {
    overrides?: InputComponentsT;
    /** An input helper rendered before and attached to the input field. */
    startEnhancer?:
      | React.ReactNode
      | ((props: SharedPropsT) => React.ReactNode);
    /** An input helper rendered after and attached to the input field. */
    endEnhancer?: React.ReactNode | ((props: SharedPropsT) => React.ReactNode);
    /** Handler for the `focus` event. */
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Handler for the `blur` event. */
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  } & BaseInputPropsT<HTMLInputElement>;

  export type MaskedInputPropsT = {
    /** See pattern examples here: https://github.com/sanniassin/react-input-mask */
    mask?: string;
    /** Character to render for unfilled mask element. */
    maskChar?: string;
  } & InputPropsT;

  export type StatefulContainerPropsT<T> = {
    children?: (props: PropsT) => React.ReactNode;
    /** Initial state of an uncontrolled input component. */
    initialState?: StateT;
    /** A state change handler. Used to override default state transitions. */
    stateReducer?: StateReducerT;
    onChange?: (e: React.ChangeEvent<T>) => void;
  };

  type OmitPropsT = {
    overrides: InputComponentsT;
    children: (props: PropsT) => React.ReactNode;
  };

  type FullStPropsT = InputPropsT & StatefulContainerPropsT<HTMLInputElement>;

  export type StInputPropsDiffT = Diff<FullStPropsT, OmitPropsT>;

  export type StatefulInputPropsT = {
    overrides?: InputComponentsT;
  } & StInputPropsDiffT;

  export class StatefulInput extends React.Component<StatefulInputPropsT> {}
  export class StatefulContainer<T extends EventTarget> extends React.Component<
    StatefulContainerPropsT<T>
  > {}
  export class Input extends React.Component<InputPropsT> {}
  export class BaseInput<T extends EventTarget> extends React.Component<
    BaseInputPropsT<T>
  > {}
  export class StyledRoot extends React.Component<SharedPropsT> {}
  export class StyledInputEnhancer extends React.Component<SharedPropsT> {}
  export class StyledStartEnhancer extends React.Component<SharedPropsT> {}
  export class StyledEndEnhancer extends React.Component<SharedPropsT> {}
  export class StyledInputContainer extends React.Component<SharedPropsT> {}
  export class StyledInput extends React.Component<SharedPropsT> {}
  export const ADJOINED: KeyMirror<ADJOINED>;
  export const CUSTOM_INPUT_TYPE: KeyMirror<CUSTOM_INPUT_TYPE>;
  export const STATE_CHANGE_TYPE: KeyMirror<STATE_CHANGE_TYPE>;
  export const SIZE: KeyMirror<SIZE>;
}

declare module "baseui/layer" {
  export type LayersManagerPropsT = {
    children?: React.ReactNode;
  };

  export type LayersContextT = {
    host: HTMLElement;
  };

  /** Layer */
  export type LayerPropsT = {
    /** Content to be rendered in the Layer. */
    children?: React.ReactNode;
    /** A DOM element where the Layer will be inserted into as a child.
         The host value comes from the layers context provider.
         If there is no `LayersManager` added and therefore no host element
         in the context, `document.body` will be used as a container element. */
    host?: HTMLElement;
    /** Defines the location (child order) at which the layer will be inserted in
     the `host` element. */
    index?: number;
    /** A custom DOM element where the layer is inserted to as a child.
     Note that the `index` prop does not work with a custom `mountNode`. */
    mountNode?: HTMLElement;
    /** A handler that is called when the Layer is mounted. */
    onMount?: () => void;
    /** A handler that is called when the Layer is unmounted. */
    onUnmount?: () => void;
  };

  export type LayerStateT = {
    container: HTMLElement;
  };

  /** TetherBehavior */
  type TetherPlacementT =
    | "auto"
    | "topLeft"
    | "top"
    | "topRight"
    | "rightTop"
    | "right"
    | "rightBottom"
    | "bottomRight"
    | "bottom"
    | "bottomLeft"
    | "leftBottom"
    | "left"
    | "leftTop";

  export type NormalizedOffsetT = {
    top: number;
    left: number;
  };

  export type NormalizedOffsetsT = {
    arrow?: NormalizedOffsetT;
    popper: NormalizedOffsetT;
  };

  export type PopperOffsetT = {
    top?: number | null;
    left?: number | null;
  };

  export type PopperDataObjectT = {
    offsets: {
      arrow?: PopperOffsetT;
      popper: PopperOffsetT;
    };
    placement: string;
  };

  export type PopperOptionsT = {
    placement: string;
    modifiers: {
      arrow: {};
      computeStyle: {};
      applyStyle: {};
      applyReactStyle: {
        fn: (data: PopperDataObjectT) => void;
      };
    };
  };

  export type TetherPropsT = {
    /** The reference element used to position the popper. */
    anchorRef?: HTMLElement;
    /** The arrow element that is passed as an arrow modifier to alter
     the popper positioning. */
    arrowRef?: HTMLElement;
    /** The element used as a popper. */
    popperRef?: HTMLElement;
    /** Content to be rendered in the Popper. */
    children?: React.ReactNode;
    /** A handler that is called when popper positioning changes. */
    onPopperUpdate?: (
      normalizedOffsets: NormalizedOffsetsT,
      popperDataObject: PopperDataObjectT
    ) => void;
    /** Recommended placement of the popper. */
    placement?: TetherPlacementT;
    /** Options to be passes to the Popper on its initialization.
         Refer to the [Popper documentation](https://popper.js.org/popper-documentation.html)
         for the full list of available options. */
    popperOptions?: any;
  };

  export type TetherStateT = {
    isMounted: boolean;
  };

  export class Layer extends React.Component<LayerPropsT> {}
  export class LayersManager extends React.Component<LayersManagerPropsT> {}
  export class Tether extends React.Component<TetherPropsT> {}
  export const TETHER_PLACEMENT: KeyMirror<TetherPlacementT>;
}
