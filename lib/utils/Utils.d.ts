export type Diff<T, U> = T extends U ? never : T;
export type KeyMirror<T extends string> = { [K in T]: K };
