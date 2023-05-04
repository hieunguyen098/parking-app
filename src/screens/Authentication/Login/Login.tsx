import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { useSelector } from 'react-redux';
import { login } from '../../../services/auth.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import FingerprintLogin from './FingerprintLogin';
import * as SecureStore from 'expo-secure-store';
const Login = () => {
    const navigation: any = useNavigation();
    const user = useSelector((state: any) => state.auth.user);
    const [pin, setPin] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [fingerprint, setFingerprint] = useState(false);
    const navigate = (name: string) => {
        navigation.navigate(name);
    };
    const onContinue = async () => {
        setIsLoading(true);
        const response = await login(user.phone, pin);
        console.log(response);
        if (response.returnCode > 0) {
            if (!response.data) {
                return;
            }
            if (response.data[0].needOtp) {
                navigation.navigate('PhoneVerification');
            } else {
                //AsyncStorage.setItem('accessToken', response.data[0].accessToken);
                navigation.navigate('TabBarScreen');
            }
        } else {
            setInvalid(true);
            setErrMsg(response.returnMessage);
        }
        setIsLoading(false);
    };

    const handleFingerprint = () => {};

    useFocusEffect(
        React.useCallback(() => {
            (async () =>
                await AsyncStorage.getItem('account')
                    .then((value) => {
                        if (value !== null) {
                            const account = JSON.parse(value);
                            if (account.fingerprint) setFingerprint(true);
                            else {
                                setFingerprint(false);
                            }
                        } else {
                            console.log('Key not found!');
                        }
                    })
                    .catch((error) => console.log(`Error retrieving data: ${error}`)))();
        }, []),
    );

    return (
        <View style={styles.container}>
            <Modal animationType="fade" transparent={true} visible={isLoading}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            </Modal>
            <View style={styles.group}>
                <Text style={styles.description}>Xin chào, {user.fullName}!</Text>
                <Text style={styles.description}>{user.phone}</Text>
                <PasswordInput
                    length={6}
                    value={pin}
                    setValue={setPin}
                    warning={{
                        show: invalid,
                        message: errMsg,
                    }}
                    onChange={() => setInvalid(false)}
                />
                <View style={styles.bottomContainer}>
                    <Pressable onPress={() => navigate('ForgotPassword')}>
                        <Text style={styles.forgotPasswordBtn}>Quên mật khẩu?</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigate('Discover'), AsyncStorage.removeItem('phoneNumber');
                        }}
                    >
                        <Text style={styles.forgotPasswordBtn}>Đổi SĐT</Text>
                    </Pressable>
                </View>

                {fingerprint && <FingerprintLogin handleFingerprint={handleFingerprint} setIsLoading={setIsLoading} />}
            </View>
            <LargeButton onPress={onContinue} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default Login;
