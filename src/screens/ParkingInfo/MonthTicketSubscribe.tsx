import {Alert, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import ImageCarousel from './components/ImageCarousel';
import { ScrollView } from 'react-native-gesture-handler';
import ParkingContent from './components/ParkingContent';
import TicketSubscribeContent from './components/TicketSubscribeContent';
import BottomButton from '../../components/Buttons/BottomButton';
import { useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { getLocationDetail } from '../../services/location.api';
import {submitMonthCard} from "../../services/month-card.api";
import {useSelector} from "react-redux";

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
        select: (data) => data.data? data.data[0] : null,
    });

    const [subscribed, setSubscribed] = useState(false);

    const [number, setNumber] = React.useState('');

    const user = useSelector((state: any) => state.auth.user);

    const handleSubscribe = () => {
        if (!subscribed) {
            if (number == '') {
                Alert.alert("", "Chưa nhập số tháng");
                setSubscribed(false)
            } else {
                submitMonthCard(
                    user.phone,
                    idLocation,
                    locationDetail.monthTicket,
                    number
                ).then( res => {
                    if (res.returnCode == 1) {
                        Alert.alert("", "Đăng ký thành công");
                        setSubscribed(true)
                    } else {
                        Alert.alert("", "Đăng ký thất bại");
                        setSubscribed(false)
                    }
                });
            }
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            {!isLoading && locationDetail && (
                <ScrollView style={{ flex: 1 }}>
                    <ImageCarousel images={[locationDetail.imageUrl]} />
                    <TicketSubscribeContent locationDetail={locationDetail} number={number} setNumber={setNumber}/>
                </ScrollView>
            )}
            <BottomButton title={ subscribed? "Đã gửi đăng ký" : "Đăng ký" } onPress={subscribed ? () => {
                Alert.alert("", "Đã gửi đăng ký vé tháng");
            } : handleSubscribe} />
        </KeyboardAvoidingView>
    );
};

export default MonthTicketSubscribe;

const styles = StyleSheet.create({});
