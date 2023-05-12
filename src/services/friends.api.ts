import { FriendsMethodId } from '../constants';
import { postData } from './api';

export const getListFriends = async (searchKey: string) => {
    console.log(searchKey)
    return {
        "data": [
            {
                "phone": "0969189947",
                "avatar": "",
                "fullName": "Đặng Hoài Bão",
                "isFriend": true,
                "friendRequested": false
            },
            {
                "phone": "0969189948",
                "avatar": "",
                "fullName": "Đặng Hoài Bão",
                "isFriend": false,
                "friendRequested": false
            }
        ]
    }
    // const data = await postData('um/user/friend', {
    //     method: FriendsMethodId.GET_LIST_FRIENDS,
    // });
    // console.log(data);
    // return data;
};

export const sendFriendRequest = async (phone: string) => {
    return {
        "returnCode": 1,
        "returnMessage": "Thành công",
        "data": null
    }
    // const data = await postData('um/user/friend', {
    //     method: FriendsMethodId.GET_LIST_FRIENDS,
    // });
    // console.log(data);
    // return data;
};
