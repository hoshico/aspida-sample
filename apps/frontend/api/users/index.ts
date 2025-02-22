/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** A list of users */
    resBody: {
      id?: number | undefined;
      name?: string | undefined;
    }[];
  };
}>;
