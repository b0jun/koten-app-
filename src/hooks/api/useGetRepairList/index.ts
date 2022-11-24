import { useQuery } from '@tanstack/react-query';

import getRepairList from '~/api/repair/getRepairList';
import useApiError from '~/hooks/error/useApiError';

const useGetRepairList = (officeIndex: number) => {
  const { handleError } = useApiError();
  return useQuery([{ api: 'getRepairList', officeIndex }], getRepairList, {
    enabled: !!officeIndex,
    select: (res) => res.data,
    onError: handleError,
  });
};

export default useGetRepairList;
