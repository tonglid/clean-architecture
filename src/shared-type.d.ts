import { Moment } from 'moment';
declare global {
  type UniqueId = string;
  type DateTime = Moment;
  type DateTimeString = string;
}
type ReduxActionsMap<A, K extends keyof A> = {
  [T in K]: A[T] extends object
    ? {
        readonly type: T;
        payload: A[T];
      }
    : {
        readonly type: T;
      };
}[K];

type RequireOne<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & {
  [P in K]-?: T[P];
};

type OptionalOne<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]: T[X];
} & {
  [P in K]?: T[P];
};

declare namespace NodeJS {
  interface ReactEnv extends ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }

  interface Process {
    env: ReactEnv;
  }
}
