import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import QRCode from 'react-native-qrcode-svg';
import { GlobalStyles } from '../constants';
import { useCountDown } from '../hooks';
import { QRType, TIMEOUT_REFRESH_QR } from '../constants';
import { useFocusEffect } from '@react-navigation/native';
import { getCheckinParkingQr, getCheckoutParkingQr } from '../services/vehicle.api';
import {useSelector} from "react-redux";

const QrCode = ({ qrType, vehicleId = "", voucherApplying = "", callback = () => {} }: { qrType: QRType, vehicleId?: string, voucherApplying?: string, callback?: (...arg: any[]) => void }) => {
    const user = useSelector((state: any) => state.auth.user);
    const [value, setValue] = useState({
        token: '',
        loading: false
    });
    const { remainingTime, setRemainingTime } = useCountDown();
    const [refresh, setRefresh] = useState(false);
    const [hitRefreshButton, setHitRefreshButton] = useState(0);
    const refreshQR = async () => {
        callback()
        setValue({
            token: value.token,
            loading: true
        });
        let response;
        if (qrType === QRType.CHECK_IN) {
            response = await getCheckinParkingQr(user.phone);
        } else if (qrType === QRType.CHECK_OUT) {
            response = await getCheckoutParkingQr(vehicleId, voucherApplying);
        }
        if (!response?.data) {
            return;
        }
        setRemainingTime(Math.min(TIMEOUT_REFRESH_QR / 1000, getRemainingSeconds(response.data[0].expiredTime)));
        setValue({
            token: response.data[0].qrToken,
            loading: false
        });
        return response.data[0].expiredTime;
    };

    function getRemainingSeconds(expiredTime: number) {
        const currentTime = new Date().getTime();
        const remainingSeconds = Math.floor((expiredTime - currentTime) / 1000);
        return remainingSeconds >= 0 ? remainingSeconds : 0;
    }

    useFocusEffect(
        React.useCallback(() => {
            refreshQR().then();
            const timeoutId = setTimeout(() => {
                setRefresh(!refresh);
            }, TIMEOUT_REFRESH_QR);
            return () => {
                clearTimeout(timeoutId);
            };
        }, [refresh, voucherApplying, hitRefreshButton]),
    );

    return (
        <View style={styles.container}>
            <View style={styles.qr}>
                {(value.loading || value.token === '') && (
                    <View style={styles.loading}>
                        <ActivityIndicator size={'large'} />
                    </View>
                )}
                <QRCode size={224} value={value.token === '' ? 'loading...' : value.token} />
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>Tự động cập nhật sau {remainingTime}s.</Text>
                <Pressable onPress={() => setHitRefreshButton(hitRefreshButton+1)} android_ripple={{ color: '#d3d3d3' }}>
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
