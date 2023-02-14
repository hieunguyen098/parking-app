import { postData } from './api';

export const login = async (phone: string, pin: string) => {
    const data = await postData('user/auth', {
        methodId: 1,
        phone: phone,
        pin: pin,
    });
    return data;
};

export const signup = async (signupForm: any) => {
    const data = await postData('user/auth', {
        methodId: 2,
        phone: '0372358494',
        fullname: 'a',
        image_url: 'a',
        gender: 1,
        birthday: '17/12/2001',
        email: 'a',
        pin: '000000',
    });
    return data;
};

export const verifyPhoneNumber = async (phone: string, otp: string) => {
    const data = await postData('user/auth', {
        methodId: 3,
        phone: phone,
        OTP: otp,
    });
    return data;
};
