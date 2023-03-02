import { getData, postData } from '../services/api';

export const getListVehicle = async () => {
    const response = await postData('parking', {
        methodId: 1,
    });
    console.log('getList', response);
    return response;
};

export const getVehicleDetail = async (id: number | string) => {
    const response = await postData(`parking`, {
        methodId: 2,
        id: id,
    });
    console.log('getVehicleDetail', response);
    return response;
};
