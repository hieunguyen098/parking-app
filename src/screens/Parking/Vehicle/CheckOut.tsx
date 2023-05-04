import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../../../components/Line';
import QrCode from '../../../components/QrCode';
import FieldValue from '../../../components/FieldValue';
import CouponUsing from '../../../components/CouponUsing';
import { QRType } from '../../../constants';

const CheckOut = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
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
        <>
            <LinearGradient
                colors={[GlobalStyles.colors.primaryOrange, GlobalStyles.colors.primaryOrange50]}
                style={styles.container}
                start={[0.5, 0]}
                end={[0.5, 1]}
            >
                <Text style={styles.title}>Quét mã để lấy xe</Text>
                <View style={styles.qrContainer}>
                    <QrCode qrType={QRType.CHECK_OUT} />
                    <Line borderStyle="dashed" color={GlobalStyles.colors.lightGrey} />
                    <FieldValue fieldName="Biển số" value="60 - B6 75901" />
                    <FieldValue fieldName="Tổng thời gian" value="04 giờ 05 phút" />
                    <FieldValue fieldName="Chi phí" value="8.000đ" />
                </View>
                <Text style={styles.field}>Sử dụng ưu đãi:</Text>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} centerContent={true}>
                        <CouponUsing />
                        <CouponUsing />
                        <CouponUsing />
                        <CouponUsing />
                        <CouponUsing />
                    </ScrollView>
                </View>
            </LinearGradient>
            <BottomButton onPress={goBack} style={styles.bottomButton} type="secondary" title="Quay lại" />
        </>
    );
};

export default CheckOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 20,
        textAlign: 'center',
    },
    qrContainer: {
        backgroundColor: '#fff',
        borderRadius: 22,
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
    },
    listCoupon: {
        height: 110,
    },
    field: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10,
    },
    bottomButton: {
        backgroundColor: '#fff',
        borderRadius: 100,
    },
});
