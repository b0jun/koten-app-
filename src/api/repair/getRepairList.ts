import api from '..';
import { IResponseBody } from '../types';

export interface IGetRepairListData {
  orderIdx: number;
  client: string;
  serialNumber: string;
  product: string;
}

interface IQueryParam {
  officeIndex: number;
}

// TODO: queryKey factory 적용
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRepairList = async ({ queryKey }: any) => {
  const [{ officeIndex }] = queryKey;
  return api.get<IResponseBody<IGetRepairListData[]>, IQueryParam>('/repair').then((response) => response.data);
};

export default getRepairList;
