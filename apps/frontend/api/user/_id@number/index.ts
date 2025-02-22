/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    status: 200;

    /** A single user */
    resBody: {
      id: number;
      name: string;
    };
  };
}>;
