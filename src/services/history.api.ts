import {postData} from './api';
import {HistoryMethodId} from "../constants/History";

const data = [
    {
        history_id: '0',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Trung tâm thương mại GigaMall',
        time: '2:20 - 26/05/2023',
        price: '-120.000đ',
    },
    {
        history_id: '1',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Trung tâm thương mại GigaMall',
        time: '17:05 - 30/05/2023',
        price: '-4.000đ',
    }
];

export const getHistories = async (phone: string, type: string, prevId: string) => {
    console.log(phone, type, prevId);
    const data = await postData('pyc/history', {
        method: HistoryMethodId.GET_HISTORIES,
        params: {
            phone: phone,
            type: type,
            prev_id: prevId
        }
    });
    console.log(data);
    return data;
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
