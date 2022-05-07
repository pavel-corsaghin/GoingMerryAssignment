import AsyncStorage from '@react-native-community/async-storage';
import {
  default as axios,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from 'axios';
import * as AxiosLogger from 'axios-logger';
import { HttpCodes } from './types/response';

export let secureInstance: AxiosInstance;

// CONFIG
const TIME_OUT = 30000;
const BASE_URL = 'https://api.openbrewerydb.org/';

secureInstance = axios.create({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
});

if (__DEV__) {
  secureInstance.interceptors.request.use(
    AxiosLogger.requestLogger,
    AxiosLogger.errorLogger,
  );

  secureInstance.interceptors.response.use(
    AxiosLogger.responseLogger,
    AxiosLogger.errorLogger,
  );
}

secureInstance.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return error;
  },
);

secureInstance.interceptors.response.use(
  function (response) {
    return mapResponse(response);
  },
  function (error) {
    return mapError(error);
  },
);

const mapResponse = (response: AxiosResponse) => {
  response.data.meta = {
    httpCode: response.status,
  };
  response.data.data = response.data;
  return response;
};

const mapError = (error: AxiosError) => {
  return {
    meta: {
      httpCode: error.response?.status ?? HttpCodes.SERVER_ERROR,
      message: error.response?.data?.meta?.message,
    },
  };
};
