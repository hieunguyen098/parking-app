import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MonthTicketItem from '../../../components/MonthTicketItem';

const data = [
    {
        key: '0',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Trường Đại học Bách Khoa TP.HCM',
        duedate: '31/12/2023',
    },
    {
        key: '1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        duedate: '31/12/2023',
    },
    {
        key: '2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        duedate: '31/12/2023',
    },
    {
        key: '3',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        duedate: '31/12/2023',
    },
    {
        key: '4',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        duedate: '31/12/2023',
    },
    {
        key: '5',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        duedate: '31/12/2023',
    },
    {
        key: '6',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        duedate: '31/12/2023',
    },
    {
        key: '7',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        duedate: '31/12/2023',
    },
    {
        key: '8',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        duedate: '31/12/2023',
    },
    {
        key: '9',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        duedate: '31/12/2023',
    },
    {
        key: '10',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        duedate: '31/12/2023',
    },
    {
        key: '11',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        duedate: '31/12/2023',
    },
];

const ListMonthTicket = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => {
                return <MonthTicketItem item={item} />;
            }}
            keyExtractor={(item) => item.key}
            style={styles.contentContainer}
        />
    );
};

export default ListMonthTicket;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
});
