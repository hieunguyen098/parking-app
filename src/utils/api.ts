import { LIMIT_NUMBER_OLD_NOTIFICATION, NotificationMethodId } from '../constants';
import { postData } from '../services/api';

export const getNotifications = async (type: string) => {
    const newest_id = 'abc';
    const response = await postData('notification', {
        method: NotificationMethodId.GET_NEW_NOTIFICATIONS,
        params: {
            type,
            newest_id,
        },
    });
    return response;
};

export const getOldNotifications = async (type: string) => {
    const prev_id = 'abc';
    const response = await postData('notification', {
        method: NotificationMethodId.GET_OLD_NOTIFICATIONS,
        params: {
            type,
            prev_id,
            limit: LIMIT_NUMBER_OLD_NOTIFICATION,
        },
    });
    return response;
};
