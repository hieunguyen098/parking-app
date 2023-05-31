import { LocationMethod } from '../constants';
import { postData } from './api';

export const getLocations = async () => {
    const data = await postData('prc/location', {
        method: LocationMethod.GET_LOCATIONS,
    });
    console.log(data);
    return data;
};

export const getLocationDetail = async (id: number | string) => {
    const data = await postData('prc/location', {
        method: LocationMethod.GET_LOCATION,
        params: {
            location_id: id
        },
    });
    console.log(data);
    return data;
};
