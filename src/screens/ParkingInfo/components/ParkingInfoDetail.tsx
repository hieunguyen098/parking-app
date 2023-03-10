import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
const ParkingInfoDetail = () => {

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </Text>
        </View>
    );
};

export default ParkingInfoDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 8,
    },
});
