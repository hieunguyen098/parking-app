import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { GlobalStyles } from '../constants/style';
import { useCountDown } from '../hooks/useCountDown';
import { getCheckinParkingQr, getCheckoutParkingQr } from '../utils/vehicle.api';
import { QRType, TIMEOUT_REFRESH_QR } from '../constants';
import { useFocusEffect } from '@react-navigation/native';

const QrCode = ({ qrType }: { qrType: QRType }) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const { remainingTime, setRemainingTime } = useCountDown();
    const [refresh, setRefresh] = useState(false);
    const refreshQR = async () => {
        setLoading(true);
        var response;
        if (qrType === QRType.CHECK_IN) {
            response = await getCheckinParkingQr();
        } else if (qrType === QRType.CHECK_OUT) {
            response = await getCheckoutParkingQr();
        }
        setRemainingTime(getRemainingSeconds(response.data.expire_time));
        setValue(response.data.qr_token);
        setLoading(false);
        return response.data.expire_time;
    };
    function getRemainingSeconds(timestamp: number) {
        const currentTime = new Date().getTime();
        const remainingSeconds = Math.floor((timestamp - currentTime) / 1000);
        return remainingSeconds >= 0 ? remainingSeconds : 0;
    }
    useFocusEffect(
        React.useCallback(() => {
            refreshQR();
            const timeoutId = setTimeout(() => {
                refreshQR();
                setRefresh(!refresh);
            }, TIMEOUT_REFRESH_QR);
            return () => {
                clearTimeout(timeoutId);
            };
        }, [refresh]),
    );
    return (
        <View style={styles.container}>
            <View style={styles.qr}>
                {(loading || value === '') && (
                    <View style={styles.loading}>
                        <ActivityIndicator size={'large'} />
                    </View>
                )}
                <QRCode size={224} value={value === '' ? 'loading...' : value} />
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>Tự động cập nhật sau {remainingTime}s.</Text>
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
    loading: {
        position: 'absolute',
        zIndex: 1000,
    },
    qr: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
