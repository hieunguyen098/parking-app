import { Text, View } from 'react-native';
import React from 'react';

import SearchInput from '../../../components/SearchInput/SearchInput';
import styles from '../styles';
import ListVehicle from './ListVehicle';

const Vehicle = () => {
    return (
        <View style={styles.container}>
            <SearchInput style={styles.searchInput} placeholder="Tìm kiếm xe gửi" />
            <Text style={styles.title}>Xe đang gửi</Text>
            <ListVehicle />
        </View>
    );
};

export default Vehicle;
