import api from '..';
import { IResponseBody } from '../types';

export interface IGetUserInfoData {
  officeIndex: number;
  officeName: string;
  type: 'M' | 'D' | 'B';
  department: string;
  name: string;
  email: string;
  phone: string | null;
}

const getUserInfo = async () => {
  return api.get<IResponseBody<IGetUserInfoData>>('/users').then((response) => response.data);
};

export default getUserInfo;
