import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import styles from '../styles';
import { signup } from '../../../services/auth';
import { useSelector } from 'react-redux';

const CreatePassword = () => {
    const navigation: any = useNavigation();
    const [pin, setPin] = useState('');
    const [pinConfirm, setPinConfirm] = useState('');
    const signupForm = useSelector((state: any) => state.auth.signupForm);
    const onNext = async () => {
        const data = await signup({
            pin,
            ...signupForm,
        });
        if (data.status === 'success') {
            navigation.navigate('PhoneVerification');
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Nhập mật khẩu của bạn</Text>
                <PasswordInput value={pin} setValue={setPin} length={6} />
                <Text style={styles.description}>Nhập lại mật khẩu</Text>
                <PasswordInput value={pinConfirm} setValue={setPinConfirm} length={6} />
            </View>
            <LargeButton onPress={() => onNext()} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default CreatePassword;
