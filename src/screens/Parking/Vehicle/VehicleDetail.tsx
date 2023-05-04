import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../../constants/style';
import { LinearGradient } from 'expo-linear-gradient';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import BottomButton from '../../../components/Buttons/BottomButton';
import FieldValue from '../../../components/FieldValue';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getVehicleDetail } from '../../../services/vehicle.api';

const VehicleDetail = () => {
    const route: any = useRoute();
    const idItem = route?.params?.id;

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
        select: (data) => (data.data ? data.data[0] : null),
    });

    const formattedDate = (dateString: string) => {
        return moment(dateString).format('HH:mm DD/MM/YYYY ');
    };
    const navigation: any = useNavigation();
    const checkOut = () => {
        navigation.navigate('CheckOut');
    };

    if (error)
        return (
            <View style={styles.container}>
                <Text>Không tìm thấy phương tiện</Text>
            </View>
        );
    return (
        <View style={styles.container}>
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
                        <Text style={styles.timer}>
                            {vehicleDetail.time_parked.hours}h : {vehicleDetail.time_parked.minutes}p
                        </Text>
                    </View>
                    <View style={styles.detailParking}>
                        <FieldValue fieldName="Bãi đỗ xe" value={vehicleDetail.location.name} />
                        <FieldValue fieldName="Địa chỉ" value={vehicleDetail.location.address} />
                        <FieldValue fieldName="Biển số" value={vehicleDetail.license_plates} />
                        <FieldValue fieldName="Thời gian vào" value={formattedDate(vehicleDetail.time_in)} />
                    </View>
                </View>
            )}
            <BottomButton onPress={checkOut} title="Lấy xe" />
        </View>
    );
};

export default VehicleDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
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
        fontSize: 40,
        fontWeight: '600',
        color: GlobalStyles.colors.lightBlack,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 20,
        color: GlobalStyles.colors.lightBlack,
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
});
