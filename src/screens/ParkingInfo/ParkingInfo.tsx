import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ImageCarousel from './components/ImageCarousel';
import { ScrollView } from 'react-native-gesture-handler';
import ParkingContent from './components/ParkingContent';

const ParkingInfo = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageCarousel />
            <ParkingContent />
        </ScrollView>
    );
};

export default ParkingInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
