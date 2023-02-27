import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ItemNotification from './components/ItemNotification';
import NotificationList from './components/NotificationList';
import { getNotifications } from '../../utils/api';
import { NotificationType } from '../../constants';

const DATA = [
    {
        id: '0',
        type: 'parking',
        title: 'Lấy xe thành công',
        place: 'Nhà xe Trường ĐH Bách Khoa TP.HCM',
        price: '5.000đ',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '1',
        type: 'parking',
        title: 'Gửi xe thành công',
        place: 'Nhà xe Trường ĐH Bách Khoa TP.HCM',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '2',
        type: 'request',
        title: 'Đặng Hoài Bão yêu cầu kết bạn',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '3',
        type: 'month-ticket',
        title: 'Mua vé tháng thành công',
        duration: '08/2022 - 09/2022',
        place: 'Nhà xe Trường ĐH Bách Khoa TP.HCM',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '4',
        type: 'parking',
        title: 'Lấy xe thành công',
        place: 'Nhà xe Trường ĐH Bách Khoa TP.HCM',
        price: '5.000đ',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '5',
        type: 'parking',
        title: 'Gửi xe thành công',
        place: 'Nhà xe Trường ĐH Bách Khoa TP.HCM',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '6',
        type: 'request',
        title: 'Đặng Hoài Bão yêu cầu kết bạn',
        lastUpdate: '1 giờ trước',
    },
    {
        id: '7',
        type: 'month-ticket',
        title: 'Mua vé tháng thành công',
        duration: '08/2022 - 09/2022',
        place: 'Nhà xe Trường ĐH Bách Khoa TP.HCM',
        lastUpdate: '1 giờ trước',
    },
];

const AllNotifications = () => {
    const [notifications, setNotifications] = useState([])
    const getAllNotification = async () => {
        const data = await getNotifications('ALL');
        console.log(data);
        setNotifications(data.data)
    };
    useEffect(() => {
        getAllNotification();
    }, []);

    return (
        <View style={styles.container}>
            <NotificationList data={notifications} />
        </View>
    );
};

export default AllNotifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
