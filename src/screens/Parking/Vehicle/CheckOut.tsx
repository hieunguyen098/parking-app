import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import {useFocusEffect, useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import { GlobalStyles } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../../../components/Line';
import QrCode from '../../../components/QrCode';
import FieldValue from '../../../components/FieldValue';
import CouponUsing from '../../../components/CouponUsing';
import { QRType } from '../../../constants';
import {useQuery, useQueryClient} from "react-query";
import {getVehicleDetail} from "../../../services/vehicle.api";
import {useSelector} from "react-redux";
import socket, {joinRoom, leaveRoom, setStatus} from "../../../services/socket/qr_status_socket";

const CheckOut = () => {
    const route: any = useRoute();
    const vehicleId = route?.params?.vehicleId;
    const navigation: any = useNavigation();
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

    const user = useSelector((state: any) => state.auth.user);
    const [roomId, setRoomId] = useState("")

    const [
        qrStatusSocket,
        setQrStatusSocket
    ] = useState(socket)

    const navHome = () => {
        navigation.navigate('Home')
    }

    const [
        statusState,
        setStatusState
    ] = useState({
        status: undefined,
        statusMessage: undefined
    })

    const isFocused = useIsFocused();

    useFocusEffect(
        useCallback(() => {
            if (isFocused) {
                console.log("vào trang")
                setRoomId(user.phone + "_" + Date.now().toString())
            } else {
                console.log("rời trang")
                leaveRoom(roomId)
                setRoomId("")
                setStatusState({
                    status: undefined,
                    statusMessage: undefined
                })
            }
        }, [isFocused])
    )

    useFocusEffect(
        useCallback(() => {
            if (roomId != "") {
                console.log("mã phòng", roomId)
                qrStatusSocket.connect()
                setTimeout(() => {
                    joinRoom(roomId)
                }, 1000)
                setStatus(setStatusState, roomId)
            }
        }, [roomId])
    )

    useFocusEffect(
        useCallback(() => {
            console.log("state", statusState)
            if (statusState.status == 1) {
                navHome()
            }
        }, [statusState])
    )

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
