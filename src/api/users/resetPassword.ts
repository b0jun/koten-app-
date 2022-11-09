import api from '..';
import { IResponseBodyWithoutDataProperty } from '../types';

export interface IResetPasswordBody {
  email: string;
  password: string;
}

const resetPassword = async (body: IResetPasswordBody) => {
  return api
    .patch<IResponseBodyWithoutDataProperty, IResetPasswordBody>('/users/reset-password', body)
    .then((response) => response.data);
};

export default resetPassword;
