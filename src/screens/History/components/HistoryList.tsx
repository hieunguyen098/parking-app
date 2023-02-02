import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HistoryItem from './HistoryItem';

const data = [
    {
        id: '0',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '1',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '2',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '3',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '4',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '5',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '6',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '7',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '8',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '9',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '10',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '11',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '12',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '13',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
    {
        id: '14',
        type: 'month-ticket',
        title: 'Mua vé tháng',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '20:20 - 28/11/2022',
        price: '-50.000đ',
    },
    {
        id: '15',
        type: 'parking',
        title: 'Thanh toán phí gửi xe',
        place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
        time: '17:05 - 27/11/2022',
        price: '-2.000đ',
    },
];

const HistoryList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <HistoryItem item={item} style={index === data.length - 1 ? { borderBottomWidth: 0 } : {}} />
                    );
                }}
                keyExtractor={(item) => item.id}
                style={styles.contentContainer}
            />
        </View>
    );
};

export default HistoryList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    contentContainer: { paddingHorizontal: 16, marginBottom: 8 },
});
