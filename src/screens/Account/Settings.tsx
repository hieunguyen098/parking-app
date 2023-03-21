import { StyleSheet, Text, View, Pressable, Switch, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../../constants/style';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

const Settings = () => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const navigation: any = useNavigation();
    const [isEnabledFingerprint, setIsEnabledFingerprint] = useState(false);
    const [isEnabledFace, setIsEnabledFace] = useState(false);
    const toggleSwitchFingerprint = () => setIsEnabledFingerprint((previousState) => !previousState);
    const toggleSwitchFace = () => setIsEnabledFace((previousState) => !previousState);

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

        if (biometricAuth.success) console.log('success');
        else if (biometricAuth.error) console.log('error', biometricAuth.error);

        console.log({ isBiometricAvailable });
        console.log({ supportedBiometrics });
        console.log({ savedBiometrics });
        console.log({ biometricAuth });
    };

    // const onFingerprint = () => {
    // const rnBiometrics = new ReactNativeBiometrics();

    // rnBiometrics.isSensorAvailable().then((resultObject) => {
    //     const { available, biometryType } = resultObject;
    //     console.log(biometryType);

    //     if (available && biometryType === BiometryTypes.TouchID) {
    //         console.log('TouchID is supported');
    //     } else if (available && biometryType === BiometryTypes.FaceID) {
    //         console.log('FaceID is supported');
    //     } else if (available && biometryType === BiometryTypes.Biometrics) {
    //         console.log('Biometrics is supported');
    //     } else {
    //         console.log('Biometrics not supported');
    //     }
    // });
    // };
    return (
        <View style={styles.container}>
            <View style={styles.listButton}>
                <Pressable
                    onPress={() => navigation.navigate('ChangePassword')}
                    style={styles.button}
                    android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
                >
                    <Text style={styles.text}>Đổi mật khẩu</Text>
                </Pressable>
                <View style={styles.toggleButton}>
                    <Text style={styles.text}>Xác thực vân tay</Text>
                    <Switch
                        trackColor={{
                            false: GlobalStyles.colors.lightGrey100,
                            true: GlobalStyles.colors.primaryOrange,
                        }}
                        style={{ padding: 0 }}
                        thumbColor={isEnabledFingerprint ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleBiometricAuth}
                        value={isBiometricSupported}
                    />
                </View>
                <View style={styles.toggleButton}>
                    <Text style={styles.text}>Xác thực khuôn mặt</Text>
                    <Switch
                        trackColor={{
                            false: GlobalStyles.colors.lightGrey100,
                            true: GlobalStyles.colors.primaryOrange,
                        }}
                        thumbColor={isEnabledFace ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchFace}
                        value={!isEnabledFace}
                    />
                </View>
                <Text>
                    {' '}
                    {isBiometricSupported
                        ? 'Your device is compatible with Biometrics'
                        : 'Face or Fingerprint scanner is not available on this device'}
                </Text>
            </View>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    listButton: {
        backgroundColor: '#fff',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 18,
    },
    text: {
        fontSize: 18,
    },
    toggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
});
