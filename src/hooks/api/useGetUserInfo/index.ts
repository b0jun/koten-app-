import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import getUserInfo from '~/api/users/getUserInfo';
import { setUserInfo } from '~/slices/userSlice';

const useGetUserInfo = (isReady = true) => {
  const dispatch = useDispatch();

  return useQuery(['getUserInfo'], getUserInfo, {
    enabled: isReady,
    select: (res) => res.data,
    cacheTime: 0,
    staleTime: 0,
    onSuccess: (userInfo) => {
      dispatch(setUserInfo(userInfo));
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useGetUserInfo;
