import { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

// eslint-disable-next-line import/prefer-default-export
export const defaultRequestConfiguration: AxiosRequestConfig = {
  // TODO: baseURL 수정 필수
  baseURL: Config.BASE_URL,
  responseType: 'json',
};
