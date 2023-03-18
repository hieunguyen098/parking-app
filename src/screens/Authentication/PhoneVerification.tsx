import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../../components/Buttons/LargeButton';
import styles from './styles';
import PinCodeInput from '../../components/PinCodeInput/PinCodeInput';
import { verifyPhoneNumber } from '../../services/auth';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCountDown } from '../../hooks';

const PhoneVerification = ({ navigation }: any) => {
    const [otp, setOtp] = useState('');
    const [invalid, setInvalid] = useState(false);
    const user = useSelector((state: any) => state.auth.user);
    const { remainingTime, setRemainingTime } = useCountDown();

    const nextStep = async () => {
        const data = await verifyPhoneNumber(user.phone, otp);
        console.log(data);
        if (data.returnCode > 0) {
            if (!data.data) {
                return;
            }
            AsyncStorage.setItem('accessToken', data.data[0].accessToken);
            navigation.navigate('TabBarScreen');
        } else {
            setInvalid(true);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>
                    Mã xác thực được gửi đến {user.phone.slice(0, 3)}****{user.phone.slice(7, 10)}
                </Text>

                <PinCodeInput
                    warning={{ show: invalid, message: 'Mã OTP không hợp lệ.' }}
                    value={otp}
                    setValue={setOtp}
                    length={6}
                />
                <Text style={styles.textCenter}>Gửi lại mã sau {remainingTime}s</Text>
            </View>
            <LargeButton onPress={nextStep} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default PhoneVerification;
