import { AxiosInstance } from 'axios';
import { ServerError } from '~/api/model/response/errorModel';

export const setInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.response.use(
        function (response: any) {
            return response;
        },
        function (error: ServerError) {
            return Promise.reject(error);
        }
    );
};
