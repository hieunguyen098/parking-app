import { VehicleMethodId } from '../constants';
import { postData } from '../services/api';

export const getListVehicle = async () => {
    const response = await postData('parking', {
        methodId: VehicleMethodId.GET_LIST_VEHICLES,
    });
    return response;
};

export const getVehicleDetail = async (id: number | string) => {
    const response = await postData(`parking`, {
        methodId: VehicleMethodId.GET_VEHICLE,
        id: id,
    });
    return response;
};
