import { FriendsMethodId } from '../constants';
import { postData } from './api';

export const getListFriends = async () => {
    const response = await postData('friends', {
        method: FriendsMethodId.GET_LIST_FRIENDS,
    });
    return response;
};
