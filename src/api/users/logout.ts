import api from '..';
import { IResponseBodyWithoutDataProperty } from '../types';

const logout = async () => {
  return api.post<IResponseBodyWithoutDataProperty, null>('/users/logout').then((response) => response.data);
};

export default logout;
