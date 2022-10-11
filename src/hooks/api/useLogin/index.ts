import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

import login from '~/api/users/login';
import { LOCAL_STORAGE_KEYS } from '~/constants/common';

const useLogin = () => {
  return useMutation(login, {
    onSuccess: async ({ data }) => {
      if (data) {
        AsyncStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useLogin;
