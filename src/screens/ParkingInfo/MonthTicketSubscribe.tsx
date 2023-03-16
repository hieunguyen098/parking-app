import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ImageCarousel from './components/ImageCarousel';
import { ScrollView } from 'react-native-gesture-handler';
import ParkingContent from './components/ParkingContent';
import TicketSubscribeContent from './components/TicketSubscribeContent';
import BottomButton from '../../components/Buttons/BottomButton';
import { useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { getLocationDetail } from '../../utils/location.api';

const MonthTicketSubscribe = () => {
    const route: any = useRoute();
    const idLocation = route?.params?.id;
    const {
        data: locationDetail,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['location', idLocation],
        queryFn: () => {
            return getLocationDetail(idLocation);
        },
        retry: false,
        select: (data) => data.data,
    });

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            {!isLoading && locationDetail && (
                <ScrollView style={{ flex: 1 }}>
                    <ImageCarousel images={locationDetail.images} />
                    <TicketSubscribeContent locationDetail={locationDetail} />
                </ScrollView>
            )}
            <BottomButton title="Đăng ký" onPress={() => {}} />
        </KeyboardAvoidingView>
    );
};

export default MonthTicketSubscribe;

const styles = StyleSheet.create({});
