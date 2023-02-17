import { getData } from '../services/api';

export const getListVehicle = async () => {
    const response = await getData('/parking', {
        methodId: 1,
    });
    return response.data;
    // set or clean data here
    // return cleaned data
};
