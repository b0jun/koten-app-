import api from '..';
import { IResponseBody } from '../types';

export interface IGetOfficeList {
  index: number;
  name: string;
}

const getOfficeList = async () => {
  return api.get<IResponseBody<IGetOfficeList[]>>('/office').then((response) => response.data);
};

export default getOfficeList;
