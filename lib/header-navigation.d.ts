declare module "baseui/header-navigation" {
  export const ALIGN = {
    right: "flex-end",
    left: "flex-start",
    center: "center"
  };

  export type OverridesT<T> = {
    Root?: OverrideT<T>;
  };

  export type PropsT = {
    overrides?: OverridesT<{}>;
  };

  export class HeaderNavigation extends React.Component<PropsT> {}
  export class StyledRoot extends React.Component<{}> {}
  export class StyledNavigationItem extends React.Component<
    JSX.IntrinsicElements["div"]
  > {}
  export class StyledNavigationList extends React.Component<{
    align: ALIGN[keyof ALIGN];
  }> {}
}
