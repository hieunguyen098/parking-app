import Axios from 'axios';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { BACKEND_URL } from '@env';

interface BodyData {
    method: string;
    params?: object;
}

export const deviceInfo = () => {
    const info = {
        device_id: Constants.installationId,
        device_model: Device.modelName,
        app_version: '1.0.0',
    };
    return info;
};



const axios = Axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'application/json',
        'X-mock-match-request-body': true,
    },
});

axios.interceptors.request.use(
    function (config) {
        if (config.headers) {
            config.headers.authorization = `Bearer accessToken`;
            return config;
        }
        return config;
    },
    function (error) {
        // Làm gì đó với lỗi request
        return Promise.reject(error);
    },
);

export const postData = async (endpoint: string, data: BodyData) => {
    data.params = { ...data.params, ...deviceInfo() };
    try {
        const response = await axios.post(`/${endpoint}`, data, {
            headers: {
                Authorization: `Bearer accessToken`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const postDataV2 = async (endpoint: string, data: any) => {
    const { method, ...rest } = data;
    try {
        const response = await axios.post(
            `/${endpoint}`,
            { params: { ...deviceInfo(), ...rest }, method: method },
            {
                headers: {
                    Authorization: `Bearer accessToken`,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getData = async (endpoint: string, params?: object | null) => {
    try {
        const response = await axios.get(`/${endpoint}`);
        return response;
    } catch (error) {
        console.error('lỗi', error);
        throw error;
    }
};
