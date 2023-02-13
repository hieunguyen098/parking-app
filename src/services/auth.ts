import { postData } from './api';

export const login = async (phone: string, pin: string) => {
    const data = await postData('user/auth', {
        methodId: 1,
        phone: phone,
        pin: pin,
    });
    return data;
};
