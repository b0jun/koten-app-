import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import resetPassword from '~/api/users/resetPassword';
import useApiError from '~/hooks/error/useApiError';
import { AuthStackNavigationProps } from '~/routes/types';

const useResetPassword = () => {
  const navigation = useNavigation<AuthStackNavigationProps<'PWResetCompleted'>>();
  const { handleError } = useApiError();

  return useMutation(resetPassword, {
    onSuccess: () => {
      navigation.navigate('PWResetCompleted');
    },
    onError: handleError,
  });
};

export default useResetPassword;
