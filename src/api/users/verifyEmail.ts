import api from '..';
import { IResponseBody } from '../types';

interface IVerifyEmailData {
  result: boolean;
}

export interface IVerifyEmailBody {
  email: string;
  authCode: number;
}

const verifyEmail = async (body: IVerifyEmailBody) => {
  return api
    .post<IResponseBody<IVerifyEmailData>, IVerifyEmailBody>('/users/mail/auth', body)
    .then((response) => response.data);
};

export default verifyEmail;
