import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import logout from '~/api/users/logout';
import { LOCAL_STORAGE_KEYS } from '~/constants/common';
import { clearUserInfo } from '~/slices/userSlice';

const useLogout = () => {
  const dispatch = useDispatch();
  return useMutation(logout, {
    onSuccess: () => {
      AsyncStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
      dispatch(clearUserInfo());
    },
  });
};

export default useLogout;
