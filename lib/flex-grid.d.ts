declare module "baseui/flex-grid" {
  import { BlockPropsT } from "baseui/block";
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
  export class FlexGridItem extends React.Component<BlockPropsT> {}
}
