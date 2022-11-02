import { useQuery } from '@tanstack/react-query';

import getOfficeList from '~/api/office/getOfficeList';
import { IDepartment } from '~/types/dropdown';

const useGetOfficeList = () => {
  const { data } = useQuery(['getOfficeList'], getOfficeList, {
    select: (res) => res.data.map(({ index, name }) => ({ label: name, value: index })),
    onError: (error) => {
      console.log(error);
    },
  });
  return data as IDepartment[];
};

export default useGetOfficeList;
