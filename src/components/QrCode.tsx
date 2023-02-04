import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { GlobalStyles } from '../constants/style';

const QrCode = () => {
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
        <View style={styles.container}>
            {loading || value === '' ? <View></View> : <QRCode size={224} value={value} />}
            <View style={styles.row}>
                <Text style={styles.description}>Tự động cập nhật sau 59s.</Text>
                <Pressable onPress={refreshQR} android_ripple={{ color: '#d3d3d3' }}>
                    <Text style={styles.refreshBtn}>Cập nhật</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default QrCode;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    description: {
        fontSize: 16,
    },
    refreshBtn: {
        color: GlobalStyles.colors.primaryOrange,
        fontSize: 16,
        paddingHorizontal: 5,
    },
});
