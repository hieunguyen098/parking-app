import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import ParkingWorkingChart from './ParkingWorkingChart';
function ParkingWorking({ dataChart }: any) {
    return (
        <View style={styles.container}>
            <ParkingWorkingChart dataChart={dataChart} />
        </View>
    );
}

export default ParkingWorking;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', marginTop: 8
    },
});
