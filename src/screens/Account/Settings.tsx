import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Switch,
    Alert,
    Modal,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../../constants/style';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { login } from '../../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { useSelector } from 'react-redux';
const Settings = () => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const navigation: any = useNavigation();
    const [isEnabledFingerprint, setIsEnabledFingerprint] = useState(false);
    const [isEnabledFace, setIsEnabledFace] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toggleSwitchFace = () => setIsEnabledFace((previousState) => !previousState);
    const [pin, setPin] = useState('');
    const [invalid, setInvalid] = useState(false);

    const getAccount = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('account');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.log('Lỗi storage');
        }
    };

    const storeAccount = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('account', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                const compatible = await LocalAuthentication.hasHardwareAsync();
                setIsBiometricSupported(compatible);
            })();
            (async () =>
                await AsyncStorage.getItem('account')
                    .then((value) => {
                        if (value !== null) {
                            const account = JSON.parse(value);
                            if (account.fingerprint) setIsEnabledFingerprint(true);
                        } else {
                            console.log('Key not found!');
                        }
                    })
                    .catch((error) => console.log(`Error retrieving data: ${error}`)))();
        }, []),
    );

    const alertComponent = (title: any, mess: any, btnTxt: any, btnFunc: any) => {
        return Alert.alert(title, mess, [
            {
                text: btnTxt,
                onPress: btnFunc,
            },
        ]);
    };
    const toggleSwitchFingerprint = async () => {
        if (!isBiometricSupported) {
            console.log('No support');
            return;
        }
        if (isEnabledFingerprint) {
            let accountTmp: any;
            const account = await getAccount();
            accountTmp = { ...account };
            delete accountTmp.fingerprint;
            await storeAccount(accountTmp);
            await SecureStore.deleteItemAsync('password');
            setIsEnabledFingerprint(false);
        } else {
            alertComponent(
                'Vui lòng nhập mã pin để xác thực',
                'Thiết bị sẽ bật xác thực vân tay sau khi xác thực',
                'OK',
                () => {},
            );
            setInvalid(true);
        }
    };

    const handleLogin = async () => {
        setIsLoading(true);
        let phone: string = '';
        await AsyncStorage.getItem('account')
            .then((value) => {
                if (value !== null) {
                    const account = JSON.parse(value);
                    phone = account.phoneNumber;
                } else {
                    console.log('Key not found!');
                }
            })
            .catch((error) => console.log(`Error retrieving data: ${error}`));
        const response = await login(phone, pin);

        if (response.returnCode > 0) {
            if (!response.data) {
                return;
            }
            if (response.data[0].needOtp) {
                navigation.navigate('PhoneVerification');
            } else {
                const account = await getAccount();
                const accountTrans = Object.assign({}, account, { fingerprint: true });
                await storeAccount(accountTrans);
                console.log('account', accountTrans);
                await SecureStore.setItemAsync('password', pin);
                setIsEnabledFingerprint(true);
                setPin('');
                alertComponent('Thông báo', 'Xác thực thành công. Vân tay đã được bật', 'OK', () => {});
            }
        } else {
            setInvalid(true);
        }
        setIsLoading(false);
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
            <Modal animationType="fade" transparent={true} visible={isLoading}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ActivityIndicator size="large" color="#fff" />
                </TouchableOpacity>
            </Modal>
            <View style={styles.listButton}>
                <Pressable
                    onPress={() => navigation.navigate('ChangePassword')}
                    style={styles.button}
                    android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
                >
                    <Text style={styles.text}>Đổi mật khẩu</Text>
                </Pressable>
                <View>
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
                            onValueChange={toggleSwitchFingerprint}
                            value={isEnabledFingerprint}
                        />
                    </View>
                    <Text>Vui lòng nhập mã pin để xác thực</Text>
                    <PasswordInput length={6} value={pin} setValue={setPin} onChange={() => setInvalid(false)} />
                    <Pressable onPress={handleLogin}>
                        <Text style={styles.loginBtn}>Xác thực</Text>
                    </Pressable>
                </View>
                {/* <View style={styles.toggleButton}>
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
                </View> */}
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

    loginBtn: {
        fontSize: 16,
        color: GlobalStyles.colors.primaryOrange,
        textAlign: 'center',
        marginTop: 10,
        padding: 16,
    },
});
