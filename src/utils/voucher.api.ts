import { ParkingMethodId } from '../constants';
import { postData } from '../services/api';

export const getListVouchers = async () => {
    const response = await postData('vouchers', {
        method: ParkingMethodId.GET_VOUCHERS,
    });
    return response;
};
