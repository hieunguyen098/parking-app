import { ParkingMethodId } from '../constants';
import { postData } from '../services/api';

export const getListVehicle = async () => {
    const response = await postData('parking', {
        method: ParkingMethodId.GET_VEHICLE_IS_PARKING,
    });
    return response;
};

export const getVehicleDetail = async (id: number | string) => {
    const response = await postData(`parking`, {
        method: ParkingMethodId.GET_VEHICLE_DETAIL,
        params: {
            id: id,
        },
    });
    return response;
};

export const getCheckinParkingQr = async () => {
    const response = await postData('parking', {
        method: ParkingMethodId.GET_CHECKIN_PARKING_QR,
    });
    return response;
};