import { Alert, Text, View } from 'react-native';
import React, { useState } from 'react';
import LargeButton from '../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FieldInput from '../../components/FieldInput';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/slices/authSlice';
import { validatePhoneNumber } from '../../utils/validation';
import { discover } from '../../services/auth';

const Discover = () => {
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const [invalid, setInvalid] = useState(false);

    const startDiscovering = async () => {
        if (validatePhoneNumber(phone)) {
            dispatch(authActions.setUser({ phone }));
            const data = await discover(phone);
            if (data.data && data.data.length > 0) {
                dispatch(authActions.setUser(data.data[0]));
                navigation.navigate('Login');
            } else {
                dispatch(authActions.setUser({phone}));
                navigation.navigate('SignUp');
            }
        } else {
            setInvalid(true);
        }
    };

    const clearViewedOnboarding = async () => {
        await AsyncStorage.removeItem('@viewedOnboarding');
    };
    return (
        <View style={styles.container}>
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
    );
};

export default Discover;
