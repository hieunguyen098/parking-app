import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ImageCarousel from './components/ImageCarousel';
import { ScrollView } from 'react-native-gesture-handler';
import ParkingContent from './components/ParkingContent';
import TicketSubscribeContent from './components/TicketSubscribeContent';
import BottomButton from '../../components/Buttons/BottomButton';

const MonthTicketSubscribe = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView style={{ flex: 1 }}>
                <ImageCarousel />
                <TicketSubscribeContent />
            </ScrollView>
            <BottomButton title="Đăng ký" type="secondary" onPress={() => {}} />
        </KeyboardAvoidingView>
    );
};

export default MonthTicketSubscribe;

const styles = StyleSheet.create({});
