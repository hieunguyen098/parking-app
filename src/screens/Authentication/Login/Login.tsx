import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { useSelector } from 'react-redux';
import { login } from '../../../services/auth';

const Login = () => {
    const navigation: any = useNavigation();
    const user = useSelector((state: any) => state.auth.user);
    const [pin, setPin] = useState('');
    const [invalid, setInvalid] = useState(false);
    const navigate = (name: string) => {
        navigation.navigate(name, { nextScreen: 'TabBarScreen', action: 'login' });
    };
    const onContinue = async () => {
        const res = await login(user.phone, pin);
        if (res.status === 'success') {
            navigation.navigate('PhoneVerification');
        } else {
            setInvalid(true);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Xin chào, {user.fullname}!</Text>
                <Text style={styles.description}>{user.phone}</Text>
                <PasswordInput
                    length={6}
                    value={pin}
                    setValue={setPin}
                    warning={{
                        show: invalid,
                        message: 'Số điện thoại không hợp lệ!',
                    }}
                    onChange={() => setInvalid(false)}
                />
                <Pressable onPress={() => navigate('ForgotPassword')}>
                    <Text style={styles.forgotPasswordBtn}>Quên mật khẩu?</Text>
                </Pressable>
            </View>
            <LargeButton onPress={onContinue} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default Login;
