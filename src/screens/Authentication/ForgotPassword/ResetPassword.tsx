import { Text, View } from 'react-native';
import React, { useState } from 'react';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import styles from '../styles';
import { changePassword, setNewPassword } from '../../../services/user.api';
import { useSelector } from 'react-redux';

const ResetPassword = () => {
    const navigation: any = useNavigation();
    const [newPin, setNewPin] = useState('');
    const [newPinConfirm, setNewPinConfirm] = useState('');
    const [isNotSame, setIsNotSame] = useState(false);
    const user = useSelector((state: any) => state.auth.user);
    const onChange = () => {
        setIsNotSame(false);
    };

    const forgotPassword = async () => {
        if (newPin === newPinConfirm) {
            console.log('change passs');
            const response = await setNewPassword(user.phone, newPin);
            console.log(response);
            if (response.returnCode > 0) {
                navigation.navigate('Login');
            }
        } else {
            setIsNotSame(true);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Nhập mật khẩu của bạn</Text>
                <PasswordInput
                    warning={{ show: isNotSame, message: 'Mật khẩu mới không khớp' }}
                    length={6}
                    onChange={onChange}
                    value={newPin}
                    setValue={setNewPin}
                />
                <Text style={styles.description}>Nhập lại mật khẩu</Text>
                <PasswordInput
                    warning={{ show: isNotSame, message: 'Mật khẩu mới không khớp' }}
                    length={6}
                    onChange={onChange}
                    value={newPinConfirm}
                    setValue={setNewPinConfirm}
                />
            </View>
            <LargeButton onPress={forgotPassword} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default ResetPassword;
