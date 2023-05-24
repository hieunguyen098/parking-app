import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect} from 'react';
import MonthTicketItem from '../../../components/MonthTicketItem';

const data = [
    {
        key: '0',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Fnhaxebachkhoa.png?alt=media&token=e04a91ab-14e9-4c57-b4ff-1bfe434af704',
        name: 'Trường Đại học Bách Khoa TP.HCM',
        duedate: '31/12/2023',
    },
    {
        key: '1',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Ftrung-tam-thuong-m-i.jpg?alt=media&token=8190218c-a3ce-4066-bbc5-205e0843302e',
        name: 'Trung tâm thuong mại GigaMall',
        duedate: '31/12/2023',
    }
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

const Test = () => {
    useEffect(() => {

    },[])
    return <Text>Hello</Text>
}

export default ListMonthTicket;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
});
