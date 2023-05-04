import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../components/Line';
import QrCode from '../components/QrCode';
import { QRType } from '../constants';

const Qr = () => {
    return (
        <LinearGradient
            colors={[GlobalStyles.colors.primaryOrange, GlobalStyles.colors.primaryOrange50]}
            style={styles.container}
            start={[0.5, 0]}
            end={[0.5, 1]}
        >
            <View style={styles.qrContainer}>
                <QrCode qrType={QRType.CHECK_IN} />
                <Line borderStyle="dashed" color={GlobalStyles.colors.lightGrey} />
                <Text style={styles.title}>Quét mã để gửi xe</Text>
            </View>
        </LinearGradient>
    );
};

export default Qr;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primaryOrange,
        flex: 1,
        padding: 20,
    },
    qrContainer: {
        backgroundColor: '#fff',
        borderRadius: 22,
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: GlobalStyles.colors.primaryOrange,
    },
});
