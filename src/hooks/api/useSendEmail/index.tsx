import { useMutation } from '@tanstack/react-query';

import sendEmail from '~/api/users/sendEmail';
import { ERROR_MESSAGE } from '~/constants/common';
import useApiError from '~/hooks/error/useApiError';

const useSendEmail = (startTimer: () => void) => {
  const { handleError } = useApiError({
    400: {
      [ERROR_MESSAGE.NOT_EXISTED_USER]: () => {
        console.log('존재하지 않는 유저입니다.');
      },
    },
  });
  return useMutation(sendEmail, {
    onSuccess: () => {
      startTimer();
      console.log('useSendEmail');
    },
    onError: handleError,
  });
};

export default useSendEmail;
