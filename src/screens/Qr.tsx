import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../constants/style';
import { LinearGradient } from 'expo-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import Line from '../components/Line';
import QrCode from '../components/QrCode';

const Qr = () => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const refreshQR = () => {
        setLoading(true);
        const today = new Date();
        setValue(today.toISOString());
        setLoading(false);
    };
    useEffect(() => {
        refreshQR();
    }, []);

    return (
        <LinearGradient
            colors={[GlobalStyles.colors.primaryOrange, GlobalStyles.colors.primaryOrange50]}
            style={styles.container}
            start={[0.5, 0]}
            end={[0.5, 1]}
        >
            <View style={styles.qrContainer}>
                <QrCode />
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
