import {postData} from './api';
import {HistoryMethodId} from "../constants/History";

const data = [
    {
        history_id: '0',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '1',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '2',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '3',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '4',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '5',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '6',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '7',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '8',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '9',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '10',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '11',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '12',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '13',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '14',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '15',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '0',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '1',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '2',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '3',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '4',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '5',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '6',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '7',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '8',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '9',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '10',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '11',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '12',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '13',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        history_id: '14',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        history_id: '15',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
];

export const getHistories = async (phone: string, type: string, prevId: string) => {
    console.log(phone, type, prevId);
    if (prevId == "") {
        return {
            data: [
                {
                    history_id: '14',
                    type: 'month-ticket',
                    title: 'Mua vé tháng',
                    time: '20:20 - 10/05/2023',
                    extraInfo: {
                        place: 'Nhà xe GigaMall Thủ Đức',
                        price: '-50.000đ',
                    }
                },
                {
                    history_id: '15',
                    type: 'parking',
                    title: 'Thanh toán phí gửi xe',
                    time: '17:05 - 08/05/2023',
                    extraInfo: {
                        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
                        price: '-4.000đ',
                    }
                }
            ]
        }
    } else {
        return {
            data: []
        }
    }
    // const data = await postData('pyc/history', {
    //     method: HistoryMethodId.GET_HISTORIES,
    //     params: {
    //         phone: phone,
    //         type: type,
    //         prev_id: prevId
    //     }
    // });
    // console.log(data);
    // return data;
};

export const getHistoryDetail = async (historyId: number | string) => {
    const data = await postData(`pyc/history`, {
        method: HistoryMethodId.GET_HISTORY_DETAIL,
        params: {
            history_id: historyId,
        },
    });
    console.log(data);
    return data;
};
