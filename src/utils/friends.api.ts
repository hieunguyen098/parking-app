import { FriendsMethodId } from '../constants';
import { postData } from '../services/api';

export const getListFriends = async () => {
    const response = await postData('friends', {
        methodId: FriendsMethodId.GET_LIST_FRIENDS,
    });
    return response;
};
