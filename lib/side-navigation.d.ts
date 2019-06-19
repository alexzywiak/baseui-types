declare module "baseui/side-navigation" {
  export const STATE_CHANGE_TYPE = {
    change: "change"
  };
  export type StateTypeT = STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE];

  export type StateT = {
    activeItemId?: string;
  };

  export type StateReducerT = (
    stateType: StateTypeT,
    nextState: StateT,
    currentState: StateT
  ) => StateT;

  export type SharedPropsT = {
    /** Defines if the nav item is currently selected */
    $active: boolean;
    /** Defines the nesting level of the rendered nav item */
    $level: number;
    /** Defines if the nav item is selectable/clickable */
    $selectable: boolean;
  };

  export type RenderItemT = (
    item: Item,
    props: SharedPropsT & {
      onSelect?: (args: { item: Item; event: Event | KeyboardEvent }) => void;
      onClick?: (event: React.MouseEvent) => void;
      onKeyDown?: (event: React.KeyboardEvent) => void;
    }
  ) => React.ReactNode;

  export type NavPropsT = {
    /** Defines the current active itemId. Used for the default calculation of the $active prop */
    activeItemId: string;
    /**
      Is called on the nav item render to test if the item is currently selected.
      If returns true the item will be rendered as an active one
      */
    activePredicate?: (item: Item, activeItemId: string) => boolean;
    /** List of navigation items */
    items: Item[];
    /** onChange handler that is called when a nav item is selected */
    onChange?: (args: { item: Item; event: Event | KeyboardEvent }) => void;
    /** Overrides for the internal elements and components */
    overrides?: {
      Root?: OverrideT<SharedPropsT>;
      NavItemContainer?: OverrideT<SharedPropsT>;
      NavLink?: OverrideT<SharedPropsT>;
      NavItem?: OverrideT<SharedPropsT>;
      SubNavContainer?: OverrideT<SharedPropsT>;
    };
    /** Optional render function that is called instead default item rendering */
    renderItem?: RenderItemT;
    /** Optional transform function that is called for each Item */
    mapItem?: (item: Item) => Item;
  };

  export type Item = Readonly<{
    /** Navigation item's title to render */
    title: React.ReactNode;
    /**
      Identifier for the navigation item.
      Can be a path value or an action name.
      It's also used in the default `activePredicate` to
      identify a currently active item
      */
    itemId: string;
    /** A list of sub-navigation items */
    subnav?: Item[];
  }>;

  export type NavItemPropsT = SharedPropsT & {
    item: Item;
    onSelect?: (args: { item: any; event: Event | KeyboardEvent }) => void;
    overrides?: {
      NavLink?: OverrideT<SharedPropsT>;
      NavItem?: OverrideT<SharedPropsT>;
    };
    renderItem?: RenderItemT;
  };

  export type StatefulContainerPropsT = {
    children: (props: NavPropsT) => React.ReactNode;
    /** Initial state of an uncontrolled component. */
    initialState?: StateT;
    /** A state change handler. Used to override default state transitions. */
    stateReducer?: StateReducerT;
    onChange?: (args: { item: Item; event: Event | KeyboardEvent }) => void;
  };

  type ExcludeT = {
    children: (props: NavPropsT) => React.ReactNode;
  };

  export type StatefulNavPropsT = Exclude<
    StatefulContainerPropsT,
    keyof ExcludeT
  >;

  export class Navigation extends React.Component<NavPropsT> {}
  export class NavItem extends React.Component<NavItemPropsT> {}
  export class StyledNavLink extends React.Component<
    JSX.IntrinsicElements["a"]
  > {}
  export class StyledNavItem extends React.Component<
    JSX.IntrinsicElements["div"]
  > {}
}
