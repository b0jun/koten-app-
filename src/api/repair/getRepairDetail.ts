import api from '..';
import { IResponseBody } from '../types';

interface IList {
  location: string;
  quantity: number;
}

export interface IGetStockDetailData {
  list: IList[];
  office: string;
  product: string;
}

interface IQueryParam {
  officeIndex: number;
  productIndex: number;
}

// TODO: queryKey factory 적용
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRepairDetail = async ({ queryKey }: any) => {
  const [{ officeIndex, productIndex }] = queryKey;
  return api
    .get<IResponseBody<IGetStockDetailData>, IQueryParam>('/repair/product', { officeIndex, productIndex })
    .then((response) => response.data);
};

export default getRepairDetail;
