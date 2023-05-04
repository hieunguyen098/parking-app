import { AuthMethodId } from '../constants';
import { postData } from './api';

export const discover = async (phone: string) => {
    const response = await postData('um/user/auth', {
        method: AuthMethodId.CHECK_PHONE,
        params: {
            phone: phone,
        },
    });
    return response;
};

export const login = async (phone: string, pin: string) => {
    const data = await postData('um/user/auth', {
        method: AuthMethodId.LOGIN,
        params: {
            phone: phone,
            pin: pin,
        },
    });
    return data;
};

export const signup = async (signupForm: any) => {
    console.log(signupForm);
    const data = await postData('um/user/auth', {
        method: AuthMethodId.SIGNUP,
        params: {
            ...signupForm,
        },
    });
    return data;
};

export const verifyPhoneNumber = async (phone: string, otp: string) => {
    const data = await postData('um/user/auth', {
        method: AuthMethodId.VERIFY_PHONE,
        params: {
            phone: phone,
            OTP: otp,
        },
    });
    return data;
};
