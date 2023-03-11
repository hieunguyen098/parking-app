import { AuthMethodId } from '../constants';
import { postData } from './api';

export const discover = async (phone: string) => {
    const data = await postData('user/auth', {
        method: AuthMethodId.CHECK_PHONE,
        params: {
            phone: phone,
        },
    });
    return data;
};

export const login = async (phone: string, pin: string) => {
    const data = await postData('user/auth', {
        method: AuthMethodId.LOGIN,
        params: {
            phone: phone,
            pin: pin,
        },
    });
    return data;
};

export const signup = async (signupForm: any) => {
    const data = await postData('user/auth', {
        method: AuthMethodId.SIGNUP,
        params: {
            phone: '0372358494',
            fullname: 'a',
            image_url: 'a',
            gender: 1,
            birthday: '17/12/2001',
            email: 'a',
            pin: '000000',
        },
    });
    return data;
};

export const verifyPhoneNumber = async (phone: string, otp: string) => {
    const data = await postData('user/auth', {
        method: AuthMethodId.VERIFY_PHONE,
        params: {
            phone: phone,
            OTP: otp,
        },
    });
    return data;
};
