import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../../../components/Buttons/LargeButton';
import PinCodeInput from '../components/PinCodeInput/PinCodeInput';
import styles from '../styles';

const PhoneVerification = () => {
    const navigation: any = useNavigation();
    const nextStep = () => {
        navigation.navigate('CreatePassword');
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Mã xác thực được gửi đến 097******12</Text>
                <PinCodeInput length={4} />
                <Text style={styles.textCenter}>Gửi lại mã sau 50s</Text>
            </View>
            <LargeButton onPress={nextStep} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default PhoneVerification;
