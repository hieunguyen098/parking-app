import {ParkingMethodId} from '../constants';
import {postData} from './api';

export const getListVehicle = async (phone: string) => {
    const data = await postData('prc/parking', {
        method: ParkingMethodId.GET_VEHICLE_IS_PARKING,
        params: {
            phone: phone
        }
    });
    console.log(data);
    return data;
};

export const getVehicleDetail = async (vehicleId: number | string) => {
    const data = await postData(`prc/parking`, {
        method: ParkingMethodId.GET_VEHICLE_DETAIL,
        params: {
            vehicle_id: vehicleId,
        },
    });
    console.log(data);
    return data;
};

export const getCheckinParkingQr = async (phone: string) => {
    const data = await postData('prc/gen-qr', {
        method: ParkingMethodId.GET_CHECKIN_PARKING_QR,
        params: {
            phone: phone
        }
    });
    console.log(data);
    return data;
};

export const getCheckoutParkingQr = async (vehicleId: string, voucherId: string) => {
    const data = await postData('prc/gen-qr', {
        method: ParkingMethodId.GET_CHECKOUT_PARKING_QR,
        params: {
            vehicle_id: vehicleId,
            voucher_id_applying: voucherId
        },
    });
    console.log(data);
    return data;
};
