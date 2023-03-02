import { postData } from '../services/api';

export const getListVouchers = async () => {
    const response = await postData('vouchers', {
        methodId: 0,
    });
    console.log('getVouchers', response);
    return response;
};
