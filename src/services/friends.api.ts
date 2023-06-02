import { FriendsMethodId } from '../constants';
import { postData } from './api';

export const getListFriends = async (phone: string, searchKey: string) => {
    console.log(searchKey)
    const data = await postData('um/user/friend', {
        method: FriendsMethodId.GET_LIST_FRIENDS,
        params: {
            this_phone: phone,
            phone_searching: searchKey,
        }
    });
    console.log(data);
    return data;
};

export const getUnknownUser = async (phone: string, searchKey: string) => {
    console.log(searchKey)
    const data = await postData('um/user/friend', {
        method: FriendsMethodId.GET_UNKNOWN_USERS,
        params: {
            this_phone: phone,
            phone_searching: searchKey,
        }
    });
    console.log(data);
    return data;
};

export const sendFriendRequest = async (phone:string, thatUserId: string) => {
    const data = await postData('um/user/friend', {
        method: FriendsMethodId.SEND_FRIEND_REQUEST,
        params: {
            phone: phone,
            that_user_id: thatUserId,
        }
    });
    console.log(data);
    return data;
};
