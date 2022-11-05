import { useMutation } from '@tanstack/react-query';

import verifyEmail from '~/api/users/verifyEmail';

const useVerifyEmail = (successVerify: () => void) => {
  return useMutation(verifyEmail, {
    onSuccess: ({ data }) => {
      console.log('useVerifyEmail');
      if (data.result) {
        successVerify();
        return;
      }
      console.log('불일치');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useVerifyEmail;
