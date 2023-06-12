import {UserMethod} from '../constants';
import {postData} from './api';

export const getUser = async (phone: string) => {
    return await postData('um/user/profile', {
        method: UserMethod.GET_USER,
        params: {
            phone: phone
        }
    });
};

export const setNewPassword = async (phone: string, newPin: string) => {
    const response = await postData('um/user/profile', {
        method: UserMethod.SET_NEW_PASSWORD,
        params: {
            phone,
            'new-pin': newPin,
            'is-require-old': false,
            'old-pin': '',
        },
    });
    return response;
};

export const changePassword = async (phone: string, oldPin: string, newPin: string) => {
    const response = await postData('um/user/profile', {
        method: UserMethod.SET_NEW_PASSWORD,
        params: {
            phone,
            'old-pin': oldPin,
            'new-pin': newPin,
            'is-require-old': false,
        },
    });
    return response;
};
