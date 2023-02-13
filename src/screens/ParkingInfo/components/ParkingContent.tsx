import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ParkingInfoHeader from './ParkingInfoHeader';
import ParkingInfoDetail from './ParkingInfoDetail';
import ParkingWorking from './ParkingWorking';

const ParkingContent = () => {
    return (
        <View style={styles.container}>
            <ParkingInfoHeader />
            <ParkingInfoDetail />
            <ParkingWorking />
        </View>
    );
};

export default ParkingContent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
