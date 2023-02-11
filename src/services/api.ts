import Axios from 'axios';
import { BACKEND_URL } from '@env';

const axios = Axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'multipart/form-data',
    },
});

export const postData = async (endpoint: string, data: object) => {
    try {
        const response = await axios.post(`/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getData = async (endpoint: string, params?: object | null) => {
    try {
        const response = await axios.get(`/${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
