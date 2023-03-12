import { LocationMethod } from '../constants';
import { postDataV2 } from '../services/api';

export const getLocations = async () => {
    const response = await postDataV2('parking', {
        method: LocationMethod.GET_LOCATIONS,
    });
    return response;
};

export const getLocationDetail = async (id: number | string) => {
    const response = await postDataV2('parking', {
        method: LocationMethod.GET_LOCATION,
        id: id,
    });
    return response;
};
