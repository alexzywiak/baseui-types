declare module "baseui/toast" {
  type Kind = {
    info: "info";
    positive: "positive";
    warning: "warning";
    negative: "negative";
  };

  type Type = {
    inline: "inline";
    toast: "toast";
  };

  type Placement = {
    topLeft: "topLeft";
    top: "top";
    topRight: "topRight";
    bottomRight: "bottomRight";
    bottom: "bottom";
    bottomLeft: "bottomLeft";
  };

  export type SharedStylePropsArgT = {
    $color?: string;
    $size?: number | string;
    $kind: KindTypeT;
    $type: NotificationTypeT;
    $closeable: boolean;
    $isRendered: boolean;
    $isVisible: boolean;
  };

  export type ToasterSharedStylePropsArgT = {
    $placement: Placement;
  };

  export type OverridesT = {
    Body?: OverrideT<SharedStylePropsArgT>;
    CloseIcon?: OverrideT<SharedStylePropsArgT>;
  };

  export type ComponentRenderPropT = (
    props: { dismiss: () => void }
  ) => React.ReactNode;

  export type ToastPropsT = {
    /** The number of milliseconds to wait before automatically dismissing a
     * notification. This behavior is disabled when the value is set to 0.*/
    autoHideDuration?: number;
    /** Toast notification content. The children-as-function
     *  receives a dismiss method that can be called to
     * dismiss the notification and can be used as a
     * handler for an action inside the toast content. */
    children: ChildrenT | ComponentRenderPropT;
    /** When set to true a close button is displayed and the notification can be dismissed by a user. */
    closeable?: boolean;
    /** Defines the type of notification. */
    kind?: keyof Kind;
    notificationType?: keyof Type;
    /** A callback function called when a notification is dismissed. */
    onClose?: () => mixed;
    onBlur?: (e: Event) => mixed;
    onFocus?: (e: Event) => mixed;
    onMouseEnter?: (e: Event) => mixed;
    onMouseLeave?: (e: Event) => mixed;
    "data-baseweb"?: string;
    overrides?: OverridesT;
    key?: React.Key;
  };

  export type ToasterOverridesT = {
    Root?: OverrideT<ToasterSharedStylePropsArgT>;
    ToastBody?: OverrideT<SharedStylePropsArgT>;
    ToastCloseIcon?: OverrideT<SharedStylePropsArgT>;
  };

  export type ToasterPropsT = {
    overrides?: ToasterOverridesT;
    placement?: keyof Placement;
    usePortal?: boolean;
    /** The number of milliseconds to wait before automatically dismissing a
     * notification. This behavior is disabled when the value is set to 0.*/
    autoHideDuration?: number;
  };
  export type ToasterContainerStateT = {
    isMounted: boolean;
    toasts: ToastPropsShapeT[];
  };
  export const KIND: Kind;
  export class Toast extends React.Component<ToastPropsT> {}
  export class ToasterContainer extends React.Component<ToasterPropsT> {}
}
