import api from '..';
import { IResponseBodyWithoutDataProperty } from '../types';

export interface ISendEmailBody {
  email: string;
}

const sendEmail = async (body: ISendEmailBody) => {
  return api
    .post<IResponseBodyWithoutDataProperty, ISendEmailBody>('/users/mail/send', body)
    .then((response) => response.data);
};

export default sendEmail;
