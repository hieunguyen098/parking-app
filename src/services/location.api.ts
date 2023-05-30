import { LocationMethod } from '../constants';
import { postData } from './api';

export const getLocations = async () => {
    // const data = await postData('prc/parking', {
    //     method: LocationMethod.GET_LOCATIONS,
    // });
    // console.log(data);
    // return data;
    return {
        "data": [
            {
                "locationId": "123",
                "locationName": "Trung tâm thương mại GigaMall",
                "imageUrl": "",
                "address": "Phạm Văn Đồng, Thủ Đức, Tp Hồ Chí Minh",
                "mapUrl": ""
            }, {
                "locationId": "234",
                "locationName": "Trường Đại Học Bách Khoa TP.HCM",
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Fnhaxebachkhoa.png?alt=media&token=e04a91ab-14e9-4c57-b4ff-1bfe434af704",
                "address": "Dĩ An, Bình Dương",
                "mapUrl": ""
            }
        ]
    }
};

export const getLocationDetail = async (id: number | string) => {
    return {
        "data": [
            {
                "parkingId": "123",
                "name": "Trung tâm thương mại GigaMall",
                "images": ["https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Ftrung-tam-thuong-m-i.jpg?alt=media&token=8190218c-a3ce-4066-bbc5-205e0843302e"],
                "address": "Phạm Văn Đồng, Thủ Đức, Tp Hồ Chí Minh",
                "timeStart": "8:30AM",
                "timeEnd": "10:00PM",
                "description": "TRUNG TÂM THƯƠNG MẠI GIGAMALL. \n    - 240-242 Phạm Văn Đồng, P. Hiệp Bình Chánh, TP. Thủ Đức, Tp.HCM. \n    - (028) 7100 3839 | 7109 3839. \n    - dvkh@gigamall.com.vn.",
                "priceTicket": [
                    {
                        "day": "2",
                        "startEndIn": "2 giờ",
                        "startPrice": "4.000",
                        "afterPrice": "1.000"
                    },{
                        "day": "3",
                        "startEndIn": "2 giờ",
                        "startPrice": "4.000",
                        "afterPrice": "1.000"
                    },{
                        "day": "4",
                        "startEndIn": "2 giờ",
                        "startPrice": "4.000",
                        "afterPrice": "1.000"
                    },{
                        "day": "5",
                        "startEndIn": "2 giờ",
                        "startPrice": "4.000",
                        "afterPrice": "1.000"
                    },{
                        "day": "6",
                        "startEndIn": "2 giờ",
                        "startPrice": "4.000",
                        "afterPrice": "1.000"
                    },{
                        "day": "7",
                        "startEndIn": "2 giờ",
                        "startPrice": "6.000",
                        "afterPrice": "2.000"
                    },{
                        "day": "8",
                        "startEndIn": "2 giờ",
                        "startPrice": "6.000",
                        "afterPrice": "2.000"
                    },
                ]
            }
        ]
    }
    // const data = await postData('prc/parking', {
    //     method: LocationMethod.GET_LOCATION,
    //     params: { id },
    // });
    // console.log(data);
    // return data;
};
