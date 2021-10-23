import axios, { AxiosInstance } from "axios";
import { setInterceptor } from "./filter/intercepor";

const instance: AxiosInstance = axios.create({
  timeout: 10000,
  withCredentials: true,
});

setInterceptor(instance);

instance.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export const setHeaderCookie = (ctx: any) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    const cookie = ctx.req?.headers?.cookie;
    if (cookie) {
      instance.defaults.headers.Cookie = cookie;
    } else {
      instance.defaults.headers.Cookie = null;
    }
  }
};

export const get = <T>(url: string, params?: T) => {
  return instance({
    method: "get",
    params,
    url,
  });
};

export const post = (url: any, data: any = null) => {
  return instance({
    method: "post",
    data,
    url,
  });
};

export const put = (url: any, data = {}, options = {}) => {
  return instance({
    method: "PUT",
    data,
    url,
  });
};

export const del = (url: string, options = {}): any => {
  return instance({
    method: "DELETE",
    url,
  });
};
