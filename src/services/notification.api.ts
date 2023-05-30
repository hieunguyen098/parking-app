import {LIMIT_NUMBER_OLD_NOTIFICATION, NotificationMethodId} from '../constants';
import {postData} from './api';

export const getNotifications = async (phone: string, type: string) => {
    console.log(type)
    return await postData('prc/notify', {
        method: NotificationMethodId.GET_NOTIFICATIONS,
        params: {
            phone,
            type,
        },
    });
};

export const getOldNotifications = async (type: string) => {
    return {
        "data": []
    }
    // const prev_id = 'abc';
    // const response = await postData('notification', {
    //     method: NotificationMethodId.GET_OLD_NOTIFICATIONS,
    //     params: {
    //         type,
    //         prev_id,
    //         limit: LIMIT_NUMBER_OLD_NOTIFICATION,
    //     },
    // });
    // return response;
};
