import api from '..';
import { IResponseBody } from '../types';

export interface IGetStockListData {
  officeIndex: number;
  office: string;
  product: string;
  productIndex: number;
  quantity: string;
}

interface IQueryParam {
  officeIndex: number;
}

// TODO: queryKey factory 적용
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStockList = async ({ queryKey }: any) => {
  const [{ officeIndex }] = queryKey;
  return api
    .get<IResponseBody<IGetStockListData[]>, IQueryParam>('/stock', { officeIndex })
    .then((response) => response.data);
};

export default getStockList;
