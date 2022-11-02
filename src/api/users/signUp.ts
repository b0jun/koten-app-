import api from '..';
import { IResponseBodyWithoutDataProperty } from '../types';

export interface ISignUpRequestBody {
  office: number;
  name: string;
  email: string;
  password: string;
}

const signUp = async (body: ISignUpRequestBody) => {
  return api
    .post<IResponseBodyWithoutDataProperty, ISignUpRequestBody>('/users', body)
    .then((response) => response.data);
};

export default signUp;
