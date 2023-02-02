import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../constants/style';
import { LinearGradient } from 'expo-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import Line from '../components/Line';

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
                {loading || value === '' ? <View></View> : <QRCode size={224} value={value} />}
                <View style={styles.row}>
                    <Text style={styles.description}>Tự động cập nhật sau 59s. </Text>
                    <Pressable onPress={refreshQR}>
                        <Text style={styles.refreshBtn}>Cập nhật</Text>
                    </Pressable>
                </View>
                <Line type="dashed" color={GlobalStyles.colors.lightGrey} />
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
    description: {
        fontSize: 16,
    },
    refreshBtn: {
        color: GlobalStyles.colors.primaryOrange,
        fontSize: 16,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: GlobalStyles.colors.primaryOrange,
    },
});
