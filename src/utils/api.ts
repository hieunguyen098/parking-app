import { getData } from '../services/api';

export const getListVehicle = async (url: string, params: object | null) => {
    const response = await getData(url, params);
    // set or clean data here
    // return cleaned data
};
