import { StyleSheet, Text, View, Pressable, Switch, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles';
import { login } from '../../../services/auth';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
function FingerprintLogin({ handleFingerprint, setIsLoading }: any) {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const user = useSelector((state: any) => state.auth.user);
    const navigation: any = useNavigation();
    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });

    const fallBackToDefaultAuth = () => {
        console.log('fall back to password authentication');
    };

    const alertComponent = (title: any, mess: any, btnTxt: any, btnFunc: any) => {
        return Alert.alert(title, mess, [
            {
                text: btnTxt,
                onPress: btnFunc,
            },
        ]);
    };

    const handleLogin = async () => {
        setIsLoading(true);
        const password = await SecureStore.getItemAsync('password');
        console.log(password, user.phone);
        const response = await login(user.phone, password as string);
        console.log(response);
        if (response.returnCode > 0) {
            navigation.navigate('TabBarScreen');
            if (!response.data) {
                return;
            }
            if (response.data[0].needOtp) {
                navigation.navigate('PhoneVerification');
            } else {
                // AsyncStorage.setItem('accessToken', response.data[0].accessToken);
            }
        }
        setIsLoading(false);
    };

    const handleBiometricAuth = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
        if (!isBiometricAvailable)
            return alertComponent('Please enter your password', 'Biometric Authentication not supported', 'OK', () =>
                fallBackToDefaultAuth(),
            );

        // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
        let supportedBiometrics;
        if (isBiometricAvailable) supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

        // Check Biometrics are saved locally in user's device
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics)
            return alertComponent('Biometric record not found', 'Please login with your password', 'OK', () =>
                fallBackToDefaultAuth(),
            );

        // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with Biometrics',
            cancelLabel: 'Cancel',
            disableDeviceFallback: true,
        });

        if (biometricAuth.success) {
            handleLogin();
            console.log('success');
        } else if (biometricAuth.error) console.log('error', biometricAuth.error);

        console.log({ isBiometricAvailable });
        console.log({ supportedBiometrics });
        console.log({ savedBiometrics });
        console.log({ biometricAuth });
    };
    return (
        <Pressable onPress={handleBiometricAuth} style={styles.fingerprintContainer}>
            <FontAwesome5 name="fingerprint" size={24} color="black" />
            <Text style={styles.fingerprintBtn}>Mở khóa bằng vân tay</Text>
        </Pressable>
    );
}

export default FingerprintLogin;
