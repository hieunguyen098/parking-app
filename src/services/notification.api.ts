import {LIMIT_NUMBER_OLD_NOTIFICATION, NotificationMethodId} from '../constants';
import {postData} from './api';

export const getNotifications = async (type: string) => {
    console.log(type)
    return {
        "data": [
            {
                "notificationId": "123",
                "type": "PARKING",
                "extraInfo": {
                    "isHaveApi": true,
                    "apiList": [
                        {
                            "api": "accept",
                            "title": "abc"
                        }
                    ],
                    "description": "any"
                },
                "createdAt": Date.now(),
            }
        ]
    }
    // const newest_id = 'abc';
    // return await postData('notification', {
    //     method: NotificationMethodId.GET_NEW_NOTIFICATIONS,
    //     params: {
    //         type,
    //         newest_id,
    //     },
    // });
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
