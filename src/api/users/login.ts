import api from '..';
import { IResponseBody } from '../types';

interface ILoginData {
  accessToken: string;
}

interface ILoginRequestBody {
  email: string;
  password: string;
}

const login = async (body: ILoginRequestBody) => {
  return api.post<IResponseBody<ILoginData>, ILoginRequestBody>('/users/login', body).then((response) => response.data);
};

export default login;
