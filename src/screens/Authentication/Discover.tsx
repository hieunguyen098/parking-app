import {
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LargeButton from '../../components/Buttons/LargeButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FieldInput from '../../components/FieldInput';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/slices/authSlice';
import { validatePhoneNumber } from '../../utils/validation';
import { discover } from '../../services/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';
import { getAccount, removeAccount } from '../../utils/account.helper';

const Discover = () => {
    const [phone, setPhone] = useState('');
    const user = useSelector((state: any) => state.auth.user);
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const [invalid, setInvalid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const clearAll = async () => {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            // clear error
        }

        console.log('Done.');
    };

    useFocusEffect(
        React.useCallback(() => {
            (async () =>
                await AsyncStorage.getItem('account')
                    .then((value) => {
                        if (value !== null) {
                            setPhone(JSON.parse(value).phoneNumber);
                        } else {
                            console.log('Key not found!');
                        }
                    })
                    .catch((error) => console.log(`Error retrieving data: ${error}`)))();
        }, []),
    );

    const startDiscovering = async () => {
        setIsLoading(true);

        if (validatePhoneNumber(phone)) {
            dispatch(authActions.setUser({ phone }));
            const account = await getAccount();
            if (account === null || account.phoneNumber !== phone) {
                await removeAccount();
                await SecureStore.deleteItemAsync('password');
            }
            const data = await discover(phone);

            if (data.data && data.data.length > 0) {
                dispatch(authActions.setUser(data.data[0]));
                if (account === null || account.phoneNumber !== phone) {
                    const jsonValue = JSON.stringify({ phoneNumber: data.data[0]?.phoneNumber });
                    await AsyncStorage.setItem('account', jsonValue)
                        .then(() => console.log('Data saved successfully!'))
                        .catch((error) => console.log(`Error saving data: ${error}`));
                }
                navigation.navigate('Login');
            } else {
                dispatch(authActions.setUser({ phone }));
                navigation.navigate('SignUp');
            }
        } else {
            setInvalid(true);
        }
        setIsLoading(false);
    };

    const clearViewedOnboarding = async () => {
        await AsyncStorage.removeItem('@viewedOnboarding');
    };

    return (
        <TouchableWithoutFeedback style={styles.group} onPress={Keyboard.dismiss}>
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
                    <Text style={styles.description}>Nhập số điện thoại để đăng ký hoặc đăng nhập</Text>
                    <FieldInput
                        setValue={setPhone}
                        autoFocus={true}
                        value={phone}
                        placeHolder="Số điện thoại"
                        source={require('../../../assets/images/phone-icon.png')}
                        iconPosition="left"
                        keyboardType="phone-pad"
                        warning={{
                            show: invalid,
                            message: 'Số điện thoại không hợp lệ!',
                        }}
                        onChange={() => setInvalid(false)}
                        maxLength={10}
                    />
                    <LargeButton
                        onPress={() => navigation.navigate('TabBarScreen')}
                        title="Vào trang chủ"
                        style={[styles.continueButton, { backgroundColor: 'lightblue' }]}
                    />
                    <LargeButton
                        onPress={clearViewedOnboarding}
                        title="clear ViewedOnboarding"
                        type="secondary"
                        style={styles.continueButton}
                    />
                </View>
                <LargeButton onPress={startDiscovering} type="primary" title="Tiếp tục" style={styles.continueButton} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Discover;
