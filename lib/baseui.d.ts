import { Primitives, Theme, ThemeProps } from "./utils";

declare namespace baseui {
  export const LightTheme: Theme;
  export const DarkTheme: Theme;
  export const BaseProvider: React.ComponentType<{ theme: Theme }>;

  export function createTheme<T>(
    primitives: Primitives,
    overrides?: T
  ): Theme & T;

  export function styled<T extends keyof JSX.IntrinsicElements>(
    tag: T,
    styledFn: React.CSSProperties | ((args: ThemeProps) => React.CSSProperties)
  ): React.ComponentType<JSX.IntrinsicElements[T]>;

  export function styled<P>(
    component: React.ComponentType<P>,
    styledFn: React.CSSProperties | ((args: ThemeProps) => React.CSSProperties)
  ): React.ComponentType<P>;
}
