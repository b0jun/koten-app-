import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { LOCAL_STORAGE_KEYS } from '~/constants/common';

const onFulfilled = (response: AxiosResponse) => {
  return response;
};

const onRejected = (error: AxiosError) => {
  return Promise.reject(error);
};

const initialization = (config: AxiosRequestConfig) => {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use(async (existedConfig) => {
    const accessToken = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
      existedConfig.headers = { Authorization: `Bearer ${accessToken}` };
    }

    return existedConfig;
  });

  axiosInstance.interceptors.response.use(onFulfilled, onRejected);

  return axiosInstance;
};

export default initialization;
