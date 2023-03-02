import Axios from 'axios';
import { BACKEND_URL } from '@env';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

export const deviceInfo = () => {
    const info = {
        device_id: Constants.installationId,
        device_model: Device.modelName,
        app_version: '1.0.0',
    };
    console.log('Gán các biến này vào environment bên Postman');
    console.log(info);
    return info;
};

const backendUrl = process.env.BACKEND_URL;

const axios = Axios.create({
    baseURL: backendUrl,
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

export const postData = async (endpoint: string, data: object) => {
    try {
        const response = await axios.post(`/${endpoint}`, { ...deviceInfo(), ...data });
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
