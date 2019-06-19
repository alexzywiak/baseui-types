type OverridesT = {
  Svg?: OverrideT<StyledComponentArgsT>;
};

type SizeT = number | string;
type ColorT = string;

type StyledComponentArgsT = {
  $size?: SizeT;
  $color?: ColorT;
};

type IconPropsT = {
  children?: React.ReactNode;
  /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
  size?: SizeT;
  /** Color of icon, will be used as svg fill */
  color?: ColorT;
  /** Allows you to set the SVG `<title>` label, which is used for accessibility */
  title?: string;
  overrides?: OverridesT;
};

declare module "baseui/icon/chevron-left" {
  class ChevronLeft extends React.Component<any> {}
  export default ChevronLeft;
}

declare module "baseui/icon/delete" {
  class Delete extends React.Component<any> {}
  export default Delete;
}

declare module "baseui/icon/delete-alt" {
  class DeleteAlt extends React.Component<any> {}
  export default Delete;
}

declare module "baseui/icon/plus" {
  class Plus extends React.Component<any> {}
  export default Plus;
}
