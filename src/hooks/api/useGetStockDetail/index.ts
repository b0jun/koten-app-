import { useQuery } from '@tanstack/react-query';

import getStockDetail from '~/api/stock/getStockDetail';
import useApiError from '~/hooks/error/useApiError';

interface IProps {
  officeIndex: number;
  productIndex: number | null;
}

const useGetStockDetail = ({ officeIndex, productIndex }: IProps) => {
  const { handleError } = useApiError();
  return useQuery([{ api: 'getStockDetail', officeIndex, productIndex }], getStockDetail, {
    enabled: !!officeIndex && !!productIndex,
    select: (res) => res.data,
    onError: handleError,
  });
};

export default useGetStockDetail;
