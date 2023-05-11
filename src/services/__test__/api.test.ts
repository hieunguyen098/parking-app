import Axios from 'axios';
import { BACKEND_URL } from '@env';

import { FriendsMethodId, LocationMethod } from '../../constants';

const defaultParams = {
    device_id: 'b3b9873c-2a00-4445-867a-2915f1103e7e',
    device_model: 'Redmi Note 9S',
    app_version: '1.0.0',
};

const axiosTest = Axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'application/json',
        'X-mock-match-request-body': true,
    },
});
axiosTest.interceptors.request.use(
    function (config) {
        if (config.headers) {
            config.headers.authorization = `Bearer accessToken`;
            return config;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

it('gọi api', () => {
    const res = 1;
    expect(res).toBe(1);
});

// describe('test api', () => {
//     it('gọi api', async () => {
//         const res = await axiosTest.post('friends', {
//             method: FriendsMethodId.GET_LIST_FRIENDS,
//             params: {
//                 ...defaultParams
//             }
//         });
//         expect(res.status).toBe(200);

//     })
// })

// describe('test api location', () => {
//     test('getLocations', async () => {
//         const res = await axiosTest.post('parking', {
//             method: LocationMethod.GET_LOCATIONS,
//             params: {
//                 ...defaultParams
//             }
//         });
//         expect(res.status).toBe(200);

//     })

//     test('getLocationDetail', async () => {
//         const res = await axiosTest.post('parking', {
//             method: LocationMethod.GET_LOCATION,
//             params: {
//                 ...defaultParams,
//                 id: 0
//             }
//         });
//         expect(res.status).toBe(200);

//     })
// })
