import Axios from 'axios';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BodyData {
    method: string;
    params?: object;
}

interface Response {
    returnCode: number;
    returnMessage: string;
    newAccessToken: string;
    data: null | any[];
}

export const deviceInfo = () => {
    return {
        device_id: Constants.installationId,
        device_model: Device.modelName,
        app_version: '1.0.0',
    };
};

const axios = Axios.create({
    baseURL: 'https://sparking.ngrok.app',
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'application/json',
        'X-mock-match-request-body': true,
    },
});

axios.interceptors.request.use(
    function (config) {
        if (config.headers) {
            config.headers.authorization = `Bearer ${AsyncStorage.getItem('accessToken')}`;
            return config;
        }
        return config;
    },
    function (error) {
        // Làm gì đó với lỗi request
        return Promise.reject(error);
    },
);

export const postData = async (endpoint: string, data: BodyData): Promise<Response> => {
    data.params = { ...data.params, ...deviceInfo() };

    try {
        const response = await axios.post(`/${endpoint}`, data);
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
