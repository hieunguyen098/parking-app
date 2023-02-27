import { NotificationMethodId } from '../constants';
import { getData, postData } from '../services/api';

export const getListVehicle = async () => {
    const response = await getData('parking', {
        methodId: 1,
    });
    return response.data;
    // set or clean data here
    // return cleaned data
};

export const getNotifications = async (type: string) => {
    const newest_id = 'abc';
    const response = await postData('notification', {
        methodId: NotificationMethodId.GET_NEW_NOTIFICATIONS,
        type,
        newest_id,
    });
    return response;
};
