import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchInput from '../../../components/SearchInput/SearchInput';
import ListMonthTicket from './ListMonthTicket';
import styles from '../styles';

const MonthTicket = () => {
    return (
        <View style={styles.container}>
            <SearchInput style={styles.searchInput} placeholder="Tìm kiếm vé tháng" />
            <Text style={styles.title}>Vé tháng của bạn</Text>
            <ListMonthTicket />
        </View>
    );
};

export default MonthTicket;
