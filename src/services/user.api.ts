import {UserMethod} from '../constants';
import {postData} from './api';

export const getUser = async () => {
    return {
        data: [
            {
                name: "Đặng Hoài Bão",
                phone: "0969189947",
                birthDay: "21/11/2001",
                email: "hoaibaobtx@gmail.com"
            }
        ]
    }
    // return await postData('um/user/profile', {
    //     method: UserMethod.GET_USER,
    // });
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
