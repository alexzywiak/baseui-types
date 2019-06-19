import { ThemeProps } from "./Theme";

export type StyleOverrideT<T> =
  | React.CSSProperties
  | ((args: ThemeProps & T) => React.CSSProperties);

export type OverrideObjectT<T> = {
  component?:
    | React.ComponentClass
    | ((
        args: T & { children: React.ReactNode; $style?: React.CSSProperties }
      ) => React.ReactNode);
  props?: object;
  style?: StyleOverrideT<T>;
};

export type OverrideT<T> = OverrideObjectT<T> | React.ComponentType<T>;
