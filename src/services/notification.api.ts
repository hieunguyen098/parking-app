import {LIMIT_NUMBER_OLD_NOTIFICATION, NotificationMethodId} from '../constants';
import {postData} from './api';

export const getNotifications = async (type: string) => {
    console.log(type)
    return {
        "data": [
            {
                "notificationId": "123",
                "type": "PARKING",
                "title": "Lấy xe thành công",
                "extraInfo": {
                    "isHaveApi": false,
                    "apiList": [
                        {
                            "api": "accept",
                            "title": ""
                        }
                    ],
                    "description": "Nhà xe Trường Đại học Bách Khoa TP. HCM"
                },
                "createdAt": new Date().setHours(new Date().getHours() - 1),
            },
            {
                "notificationId": "234",
                "type": "PARKING",
                "title": "Gửi xe thành công",
                "extraInfo": {
                    "isHaveApi": false,
                    "apiList": [
                        {
                            "api": "accept",
                            "title": ""
                        }
                    ],
                    "description": "Nhà xe Trường Đại học Bách Khoa TP. HCM"
                },
                "createdAt": new Date().setHours(new Date().getHours() - 3),
            },
            {
                "notificationId": "134",
                "type": "REQUEST",
                "title": "Nguyễn Xuân Hiếu gửi yêu cầu kết bạn",
                "extraInfo": {
                    "isHaveApi": true,
                    "apiList": [
                        {
                            "api": "accept",
                            "title": "Chấp nhận"
                        }, {
                            "api": "reject",
                            "title": "Từ chối"
                        }
                    ],
                },
                "createdAt": new Date().setHours(new Date().getHours() - 3),
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
