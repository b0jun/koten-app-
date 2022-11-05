import { useCallback } from 'react';

function useErrorHandlers() {
  const handle500 = () => {
    console.log('네트워크 상태를 확인해주세요');
  };

  const handleUnexpectedError = useCallback(() => {
    console.log('오류가 발생했습니다');
  }, []);

  const handleExpiredRefreshToken = useCallback(() => {
    console.log('로그아웃');
  }, []);

  return {
    handle500,
    handleUnexpectedError,
    handleExpiredRefreshToken,
  };
}

export default useErrorHandlers;
