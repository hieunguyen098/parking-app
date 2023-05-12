import { LocationMethod } from '../constants';
import { postData } from './api';

export const getLocations = async () => {
    // const data = await postData('prc/parking', {
    //     method: LocationMethod.GET_LOCATIONS,
    // });
    // console.log(data);
    // return data;
    return {
        "data": [
            {
                "parkingId": "123",
                "name": "123",
                "image": "",
                "address": "123"
            }
        ]
    }
};

export const getLocationDetail = async (id: number | string) => {
    const data = await postData('prc/parking', {
        method: LocationMethod.GET_LOCATION,
        params: { id },
    });
    console.log(data);
    return data;
};
