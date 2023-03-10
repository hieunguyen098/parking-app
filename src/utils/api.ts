import { LIMIT_NUMBER_OLD_NOTIFICATION, NotificationMethodId } from '../constants';
import { getData, postData } from '../services/api';

export const getNotifications = async (type: string) => {
    const newest_id = 'abc';
    const response = await postData('notification', {
        methodId: NotificationMethodId.GET_NEW_NOTIFICATIONS,
        type,
        newest_id,
    });
    return response;
};

export const getOldNotifications = async (type: string) => {
    const prev_id = 'abc';
    const response = await postData('notification', {
        methodId: NotificationMethodId.GET_OLD_NOTIFICATIONS,
        type,
        prev_id,
        limit: LIMIT_NUMBER_OLD_NOTIFICATION,
    });
    return response;
};
