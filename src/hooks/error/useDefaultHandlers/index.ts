import useErrorHandlers from '../useErrorHandlers';

import { ERROR_MESSAGE } from '~/constants/common';

interface IHandler {
  [key: string]: () => void;
}

export type IHandlers = Record<string, IHandler>;

function useDefaultHandlers() {
  const { handle500, handleExpiredRefreshToken } = useErrorHandlers();

  const defaultHandlers: IHandlers = {
    401: {
      [ERROR_MESSAGE.INVALID_REFRESH_TOKEN]: handleExpiredRefreshToken,
    },
    500: {
      default: handle500,
    },
  };

  return {
    defaultHandlers,
  };
}

export default useDefaultHandlers;
