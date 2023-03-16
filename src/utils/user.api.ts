import { UserMethod } from '../constants';
import { postDataV2 } from '../services/api';

export const getUser = async () => {
    const response = await postDataV2('user', {
        method: UserMethod.GET_USER,
    });
    return response;
};
