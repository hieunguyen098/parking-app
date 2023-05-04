import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import LargeButton from '../../../components/Buttons/LargeButton';
import styles from '../styles';
import PinCodeInput from '../../../components/PinCodeInput/PinCodeInput';
import { verifyPhoneNumber } from '../../../services/auth.api';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCountDown } from '../../../hooks';

const PhoneVerification = ({ navigation }: any) => {
    const [otp, setOtp] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [errMsg, setErrMsg] = useState('');
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
            navigation.navigate('ResetPassword');
        } else {
            setInvalid(true);
            setErrMsg(data.returnMessage);
        }
    };
    const resend = () => {
        setRemainingTime(30);
    };

    useFocusEffect(
        React.useCallback(() => {
            setRemainingTime(30);
        }, []),
    );
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>
                    Mã xác thực được gửi đến {user.phone.slice(0, 3)}****{user.phone.slice(7, 10)}
                </Text>

                <PinCodeInput warning={{ show: invalid, message: errMsg }} value={otp} setValue={setOtp} length={6} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.textCenter}>Gửi lại mã sau {remainingTime}s.</Text>
                    {!remainingTime && (
                        <Pressable onPress={resend}>
                            <Text style={styles.resendBtn}> Gửi lại</Text>
                        </Pressable>
                    )}
                </View>
            </View>
            <LargeButton onPress={nextStep} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default PhoneVerification;
