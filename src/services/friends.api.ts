import { FriendsMethodId } from '../constants';
import { postData } from './api';

export const getListFriends = async (searchKey: string) => {
    console.log(searchKey)
    return {
        "data": [
            {
                "phone": "0969189947",
                "avatar": "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/avatar%2F1683942244665-0372358493?alt=media&token=fac1bc6d-07ee-4abd-bfac-688fd6080e04",
                "fullName": "Đặng Hoài Bão",
                "isFriend": true,
                "friendRequested": false
            },
            {
                "phone": "0969189948",
                "avatar": "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/avatar%2F17523016_774532709394454_941232164224933694_n.jpg?alt=media&token=f2a9ac4e-5be6-4a1f-8112-eb9755c78086",
                "fullName": "Nguyễn Xuân Hiếu",
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
