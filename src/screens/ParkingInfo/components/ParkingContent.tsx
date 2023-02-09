import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ParkingInfoHeader from './ParkingInfoHeader';

const ParkingContent = () => {
    return (
        <View style={styles.container}>
            <ParkingInfoHeader />
        </View>
    );
};

export default ParkingContent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
