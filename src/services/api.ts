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

export const postData = async (endpoint: string, data: object) => {
    try {
        const response = await axios.post(
            `/${endpoint}`,
            { ...deviceInfo(), ...data },
            {
                headers: {
                    Authorization: `Bearer accessToken`,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getData = async (endpoint: string, params?: object | null) => {
    try {
        const response = await axios.get(`/${endpoint}`, {
            headers: {
                Authorization: `Bearer accessToken`,
            },
            params: {
                ...deviceInfo(),
                ...params,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
