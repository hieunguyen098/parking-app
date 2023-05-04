import { LocationMethod } from '../constants';
import { postData } from '../services/api';

export const getLocations = async () => {
    const response = await postData('parking', {
        method: LocationMethod.GET_LOCATIONS,
    });
    return response;
};

export const getLocationDetail = async (id: number | string) => {
    const response = await postData('parking', {
        method: LocationMethod.GET_LOCATION,
        params: { id },
    });
    return response;
};
