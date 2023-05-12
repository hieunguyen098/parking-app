import { AuthMethod } from '../constants';
import { postData } from './api';

export const discover = async (phone: string) => {
    const now = Date.now()
    console.log(now)
    const data = await postData('um/user/auth', {
        method: AuthMethod.CHECK_PHONE,
        params: {
            phone: phone,
        },
    });
    console.log(Date.now() - now)
    console.log(data);
    return data;
};

export const login = async (phone: string, pin: string) => {
    const data = await postData('um/user/auth', {
        method: AuthMethod.LOGIN,
        params: {
            phone: phone,
            pin: pin,
        },
    });
    console.log(data);
    return data;
};

export const signup = async (signupForm: any) => {
    console.log(signupForm);
    const data = await postData('um/user/auth', {
        method: AuthMethod.SIGNUP,
        params: {
            ...signupForm,
        },
    });
    console.log(data);
    return data;
};

export const verifyPhoneNumber = async (phone: string, otp: string) => {
    const data = await postData('um/user/auth', {
        method: AuthMethod.VERIFY_PHONE,
        params: {
            phone: phone,
            OTP: otp,
        },
    });
    console.log(data);
    return data;
};
