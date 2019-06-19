declare module "baseui/breadcrumbs" {
  export type BreadcrumbsPropsT = {
    children?: React.ReactNode;
    overrides?: OverridesT;
    ariaLabel?: string;
  };

  export class Breadcrumbs extends React.Component<BreadcrumbsPropsT> {}
}
