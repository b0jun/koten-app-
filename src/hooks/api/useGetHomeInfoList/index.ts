import { useQuery } from '@tanstack/react-query';

import getHomeInfoList from '~/api/home/getHomeInfoList';

type userTypes = 'M' | 'A' | 'B' | 'C' | 'D' | 'E' | undefined;

const useGetHomeInfoList = (userType: userTypes) => {
  return useQuery(['useGetHomeInfoList', userType], getHomeInfoList, {
    select: (res) => res.data,
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useGetHomeInfoList;
