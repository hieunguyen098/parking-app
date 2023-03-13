import { FriendsMethodId } from '../constants';
import { postData } from '../services/api';

export const getListFriends = async () => {
    const response = await postData('friends', {
        method: FriendsMethodId.GET_LIST_FRIENDS,
    });
    return response;
};
