import { Text, View } from 'react-native';
import React from 'react';
import ListParkingLot from './ListParkingLot';
import SearchInput from '../../../components/SearchInput/SearchInput';
import styles from '../styles';

const ParkingLot = () => {
    return (
        <View style={styles.container}>
            <SearchInput style={styles.searchInput} placeholder="Tìm kiếm bãi đỗ xe" onSearch={() => {}}/>
            <Text style={styles.title}>Nhà xe đã gửi</Text>
            <ListParkingLot />
        </View>
    );
};

export default ParkingLot;
