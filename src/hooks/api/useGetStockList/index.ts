import { useQuery } from '@tanstack/react-query';

import getStockList from '~/api/stock/getStockList';
import useApiError from '~/hooks/error/useApiError';

const useGetStockList = (officeIndex: number) => {
  const { handleError } = useApiError();
  return useQuery([{ api: 'getStockList', officeIndex }], getStockList, {
    enabled: !!officeIndex,
    select: (res) => res.data,
    onError: handleError,
  });
};

export default useGetStockList;
