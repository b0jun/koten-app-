import axios, { AxiosResponse } from 'axios';
import { useCallback } from 'react';

import useDefaultHandlers, { IHandlers } from '../useDefaultHandlers';
import useErrorHandlers from '../useErrorHandlers';

interface IErrorResponseBody {
  statusCode: number;
  message: string;
  error: string;
}

function hasErrorResponseBody(response: unknown): response is AxiosResponse<IErrorResponseBody> {
  return response !== undefined;
}

// 매개변수 handlers: 컴포넌트에서 재정의한 핸들러 모음
const useApiError = (handlers?: IHandlers) => {
  const { defaultHandlers } = useDefaultHandlers();
  const { handleUnexpectedError } = useErrorHandlers();

  const handleError = useCallback(
    (error: unknown) => {
      /**
       * #1 axios가 핸들링하지 못한 에러
       * ex. 사용자의 네트워크가 연결 해재된 상태
       */
      if (!axios.isAxiosError(error)) {
        handleUnexpectedError();
        return;
      }

      /**
       * #2 error 객체에 response 객체가 존재 && AxiosError<IErrorResponseBody>
       * ++ IErrorResponseBody 타입이 아닌 경우 내부적으로 문제가 있는 상태
       */
      if (error.response && hasErrorResponseBody(error.response)) {
        const httpStatus = `${error.response.status}`;
        const {
          data: { message: errorMessage, statusCode: serviceCode },
        } = error.response;

        /**
         * #2-1 API 요청 함수를 사용하는 측에서 handlers를 전달해준 경우
         */
        if (handlers) {
          switch (true) {
            case Boolean(handlers[httpStatus]) && Boolean(handlers[httpStatus][serviceCode]):
              handlers[httpStatus][serviceCode]();
              return;
            case Boolean(handlers[httpStatus]) && Boolean(handlers[httpStatus][errorMessage]):
              handlers[httpStatus][errorMessage]();
              return;
            case Boolean(handlers[httpStatus]) && Boolean(handlers[httpStatus].default):
              handlers[httpStatus].default();
              return;
            // no default
          }
        }

        /**
         * #2-2 내부적으로 정의되어 있는 기본 에러 핸들러
         */
        switch (true) {
          case Boolean(defaultHandlers[httpStatus]) && Boolean(defaultHandlers[httpStatus][serviceCode]):
            defaultHandlers[httpStatus][serviceCode]();
            break;
          case Boolean(defaultHandlers[httpStatus]) && Boolean(defaultHandlers[httpStatus][errorMessage]):
            defaultHandlers[httpStatus][errorMessage]();
            break;
          case Boolean(defaultHandlers[httpStatus]) && Boolean(defaultHandlers[httpStatus].default):
            defaultHandlers[httpStatus].default();
            break;
          default:
            handleUnexpectedError();
        }
        return;
      }

      /**
       * #3 error 객체에 response 객체가 없는 상태
       */
      const httpStatus = error.status;

      /**
       * #3-1 HTTP status 조차 없는 경우 (= 고려하지 못했거나 예상하지 못한 케이스)
       */
      if (!httpStatus) {
        handleUnexpectedError();
        return;
      }

      /**
       * #3-2 HTTP status는 있는 경우 (= 해당 HTTP status 기본 에러 핸들링 로직 호출)
       */
      switch (true) {
        case Boolean(defaultHandlers[httpStatus]) && Boolean(defaultHandlers[httpStatus].default):
          defaultHandlers[httpStatus].default();
          break;
        default:
          handleUnexpectedError();
      }
    },
    [handlers, defaultHandlers, handleUnexpectedError],
  );

  return { handleError };
};

export default useApiError;
