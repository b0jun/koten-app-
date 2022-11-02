import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import type { AuthStackNavigationProps } from '~/routes/types';

import signUp from '~/api/users/signUp';

const useSignUp = () => {
  const navigation = useNavigation<AuthStackNavigationProps<'SignIn'>>();
  return useMutation(signUp, {
    onSuccess: () => {
      console.log('SignUp!!');
      navigation.navigate('SignUpCompleted');
    },
    onError: (e) => {
      console.log(e);
    },
  });
};

export default useSignUp;
