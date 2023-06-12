import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomButton from '../../../components/Buttons/BottomButton';
import FieldValue from '../../../components/FieldValue';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getVehicleDetail } from '../../../services/vehicle.api';
import ModalTransferCheckout from './ModalTransferCheckout';

const VehicleDetail = () => {
    const route: any = useRoute();
    const idItem = route?.params?.id;
    const [isOpen, setIsOpen] = useState(false);

    const {
        data: vehicleDetail,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['vehicle', idItem],
        queryFn: () => {
            return getVehicleDetail(idItem);
        },
        retry: false,
        select: (data) => {
            return data.data && data.data.length > 0 ? data.data[0] : null;
        },
    });

    const formattedDate = (dateString: string) => {
        return moment(dateString).format('HH:mm DD/MM/YYYY');
    };
    const navigation: any = useNavigation();
    const checkOut = () => {
        navigation.navigate('CheckOut', {
            vehicleId: idItem,
        });
    };

    if (error)
        return (
            <View style={styles.container}>
                <Text>Không tìm thấy phương tiện</Text>
            </View>
        );
    return (
        <View style={styles.container}>
            <ModalTransferCheckout item={vehicleDetail} isOpen={isOpen} setIsOpen={setIsOpen} />
            {isLoading && (
                <View style={{ marginTop: 8 }}>
                    <ActivityIndicator size="large" />
                </View>
            )}
            {!isLoading && vehicleDetail && (
                <View style={styles.content}>
                    <Text style={styles.title}>Thời gian đã gửi</Text>
                    <View style={styles.scarfShape}>
                        <LinearGradient
                            style={styles.rounded}
                            colors={[GlobalStyles.colors.primaryOrange, GlobalStyles.colors.primaryOrange50]}
                        >
                            <View style={[styles.elementOne, styles.rounded]} />
                        </LinearGradient>
                        <View style={[styles.elementTwo, styles.rounded]} />
                        <CounterTimer
                            hours={vehicleDetail.duration.hours}
                            minutes={vehicleDetail.duration.minutes}
                            seconds={vehicleDetail.duration.seconds}
                        />
                    </View>
                    <View style={styles.detailParking}>
                        <FieldValue fieldName="Bãi đỗ xe" value={vehicleDetail.location.locationName} />
                        <FieldValue fieldName="Địa chỉ" value={vehicleDetail.location.address} />
                        <FieldValue fieldName="Biển số" value={vehicleDetail.licensePlate} />
                        <FieldValue fieldName="Thời gian vào" value={formattedDate(vehicleDetail.entryTime)} />
                    </View>
                    <Pressable onPress={() => setIsOpen(true)}>
                        <Text style={styles.textBtn}>Ủy quyền lấy xe</Text>
                    </Pressable>
                </View>
            )}
            <BottomButton onPress={checkOut} title="Lấy xe" />
        </View>
    );
};

const CounterTimer = ({ hours, minutes, seconds }: any) => {
    const [duration, setDuration] = useState({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    });

    useEffect(() => {
        const timerId = setInterval(
            (duration) => {
                try {
                    const seconds = (duration.seconds + 1) % 60;
                    const minutes = (duration.minutes + Math.floor((duration.seconds + 1) / 60)) % 60;
                    const hours =
                        duration.hours + Math.floor((duration.minutes + Math.floor((duration.seconds + 1) / 60)) / 60);
                    setDuration({
                        hours: hours,
                        minutes: minutes,
                        seconds: seconds,
                    });
                } catch (e) {
                    clearInterval(timerId);
                }
            },
            1000,
            duration,
        );
        return () => {
            clearInterval(timerId);
        };
    }, [duration]);
    return (
        <Text style={styles.timer}>
            {String(duration.hours).padStart(2, '0')}h : {String(duration.minutes).padStart(2, '0')}p :{' '}
            {String(duration.seconds).padStart(2, '0')}s
        </Text>
    );
};

export default VehicleDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        // alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
    },
    scarfShape: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    elementOne: {
        width: 280,
        height: 280,
        zIndex: 1,
    },
    elementTwo: {
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 2,
    },
    rounded: {
        borderRadius: 1000,
    },
    timer: {
        position: 'absolute',
        zIndex: 2,
        fontSize: 25,
        fontWeight: '600',
        color: GlobalStyles.colors.lightBlack,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 20,
        color: GlobalStyles.colors.lightBlack,
        textAlign: 'center',
    },
    detailParking: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: GlobalStyles.colors.lightGrey100,
        backgroundColor: '#fff',
        marginTop: 20,
    },
    textBtn: {
        color: GlobalStyles.colors.primaryOrange,
        fontSize: 16,
        textAlign: 'right',
        padding: 10,
    },
});
