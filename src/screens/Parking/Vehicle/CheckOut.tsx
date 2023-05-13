import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import { GlobalStyles } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../../../components/Line';
import QrCode from '../../../components/QrCode';
import FieldValue from '../../../components/FieldValue';
import CouponUsing from '../../../components/CouponUsing';
import { QRType } from '../../../constants';
import {useQuery, useQueryClient} from "react-query";
import {getVehicleDetail} from "../../../services/vehicle.api";

const CheckOut = () => {
    const route: any = useRoute();
    const vehicleId = route?.params?.vehicleId;
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();

    const {
        data: vehicleDetail,
        refetch
    } = useQuery({
        queryKey: ['vehicleCheckOut', vehicleId],
        queryFn: () => {
            return getVehicleDetail(vehicleId);
        },
        retry: failureCount => (failureCount < 3),
        select: (data) => {
            return (data.data && data.data.length > 0) ? data.data[0] : null;
        },
    });

    const refreshQR = () => {
        refetch().then()
        setLoading(true);
        const today = new Date();
        setValue(today.toISOString());
        setLoading(false);
    };

    const formatCash = (str: any) => {
        return String(str).split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        }) + " vnđ"
    }

    const [couponApplying, setCouponApplying] = useState("")

    useEffect(() => {
        refreshQR();
    }, [couponApplying]);

    // TODO
    const CPLIST = [
        {
            voucherId: "1",
        },
        {
            voucherId: "2",
        },
        {
            voucherId: "3",
        }
    ]

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
                    <QrCode qrType={QRType.CHECK_OUT}
                            vehicleId={vehicleId}
                            voucherApplying={couponApplying}
                            callback={refreshQR}/>
                    { vehicleDetail && <>
                        <Line borderStyle="dashed" color={GlobalStyles.colors.lightGrey} />
                        <FieldValue fieldName="Biển số" value={vehicleDetail.licensePlate} />
                        <FieldValue fieldName="Tổng thời gian" value={`${String(vehicleDetail.duration.hours).padStart(2, '0')} giờ ${String(vehicleDetail.duration.minutes).padStart(2, '0')} phút`} />
                        <FieldValue fieldName="Chi phí tạm tính" value={formatCash(vehicleDetail.fee * 1000)} />
                    </>}
                </View>
                { CPLIST && CPLIST.length > 0 &&
                    <>
                    <Text style={styles.field}>Sử dụng ưu đãi:</Text>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} centerContent={true}>
                            { CPLIST.map((item) =>
                                (item.voucherId == couponApplying)
                                    ? <CouponUsing key={item.voucherId}
                                                   id={item.voucherId}
                                                   isApplying={true}
                                                   setApplying={setCouponApplying}/>
                                    : <CouponUsing key={item.voucherId}
                                                   id={item.voucherId}
                                                   setApplying={setCouponApplying}/>
                            )}
                        </ScrollView>
                    </View>
                    </>
                }

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
