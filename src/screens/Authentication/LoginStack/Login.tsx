import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

const Login = () => {
    const navigation: any = useNavigation();
    const navigate = (name: string) => {
        navigation.navigate(name);
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Xin chào, CAO THANH BÌNH!</Text>
                <Text style={styles.description}>0398888888</Text>
                <PasswordInput length={6} />
                <Pressable onPress={() => navigate('ForgotPasswordStack')}>
                    <Text style={styles.forgotPasswordBtn}>Quên mật khẩu?</Text>
                </Pressable>
            </View>
            <LargeButton onPress={() => navigate('PhoneVerification')} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default Login;
