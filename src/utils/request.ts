import axios, { Method, AxiosRequestConfig} from 'axios';
import {ApiResponse} from './interfaces'

const request = <T>(uri: string, method: Method, data: any) : Promise<T> => {
    const config : AxiosRequestConfig = {
        url: uri,
        method: method,
        data: data
    };
    const promise = new Promise<T>((resolve, reject) => {
        axios.request<ApiResponse<T>>(config).then<ApiResponse<T>>(response => {
            const data = response.data
            if (data.code === 0) {
                resolve(data.data)
            } else {
                reject(data.message)
            }
            return data
        }).catch(reject)
    })
    return promise;
};

export default request;