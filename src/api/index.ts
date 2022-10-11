import { AxiosResponse } from 'axios';

import initialization from './axiosSetup';
import { defaultRequestConfiguration } from './config';

export const axiosInstance = initialization(defaultRequestConfiguration);

const get = <ReturnType, QueryParamType = undefined>(url: string, queryParams?: QueryParamType) => {
  return axiosInstance.get<ReturnType, AxiosResponse<ReturnType, null>, null>(url, {
    params: queryParams,
  });
};

const post = <ReturnType, BodyType, QueryParamType = undefined>(
  url: string,
  body?: BodyType,
  queryParams?: QueryParamType,
) => {
  return axiosInstance.post<ReturnType, AxiosResponse<ReturnType, BodyType>, BodyType>(url, body, {
    params: queryParams,
  });
};

const put = <ReturnType, BodyType, QueryParamType = undefined>(
  url: string,
  body: BodyType,
  queryParams?: QueryParamType,
) => {
  return axiosInstance.put<ReturnType, AxiosResponse<ReturnType, BodyType>, BodyType>(url, body, {
    params: queryParams,
  });
};

const patch = <ReturnType, BodyType, QueryParamType = undefined>(
  url: string,
  body: BodyType,
  queryParams?: QueryParamType,
) => {
  return axiosInstance.patch<ReturnType, AxiosResponse<ReturnType, BodyType>, BodyType>(url, body, {
    params: queryParams,
  });
};

const deleteR = <ReturnType, BodyType = undefined, QueryParamType = undefined>(
  url: string,
  body?: BodyType,
  queryParams?: QueryParamType,
) => {
  return axiosInstance.delete<ReturnType, AxiosResponse<ReturnType, BodyType>, BodyType>(url, {
    params: queryParams,
    data: body,
  });
};

export default { get, post, put, patch, delete: deleteR };
