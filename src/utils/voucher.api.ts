import { VoucherMethodId } from '../constants';
import { postData } from '../services/api';

export const getListVouchers = async () => {
    const response = await postData('vouchers', {
        methodId: VoucherMethodId.GET_LIST_VOUCHERS,
    });
    return response;
};
