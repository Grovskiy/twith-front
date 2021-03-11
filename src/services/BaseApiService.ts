import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';

export abstract class BaseApiService {
  protected api: AxiosStatic;

  constructor() {
    this.api = axios;
  }

  protected callMethod(
    method: string,
    url: string,
    requestData?: string | object | null,
    responseKey?: string | null,
    config?: AxiosRequestConfig,
  ): any {
    const requestedMethod = method.toLowerCase();

    switch (requestedMethod) {
      case 'post':
        return this.api
          .post(url, requestData, config)
          .then((response: AxiosResponse) => {
            return response;
          });
      case 'get':
        return this.api.get(url, config).then((response: AxiosResponse) => {
          return response;
        });
      default:
        throw new Error('An undefined method called.');
    }
  }
}
