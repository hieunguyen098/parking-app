import {ParkingMethodId} from '../constants';
import {postData} from './api';

export const getListVouchers = async () => {
    const data = await postData('prc/voucher', {
        method: ParkingMethodId.GET_VOUCHERS,
    });
    console.log(data)
    return data;
};
