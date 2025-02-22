import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_9xeuu7 } from './user/_id@number';
import type { Methods as Methods_1xhiioa } from './users';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3001' : baseURL).replace(/\/$/, '');
  const PATH0 = '/user';
  const PATH1 = '/users';
  const GET = 'GET';

  return {
    user: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns A single user
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_9xeuu7['get']['resBody'], BasicHeaders, Methods_9xeuu7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns A single user
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_9xeuu7['get']['resBody'], BasicHeaders, Methods_9xeuu7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    users: {
      /**
       * @returns A list of users
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns A list of users
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
