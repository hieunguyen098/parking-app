import { Text, View } from 'react-native';
import React from 'react';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import styles from '../styles';

const ResetPassword = () => {
    const navigation: any = useNavigation();
    const navigate = (name: string) => {
        navigation.navigate(name);
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Nhập mật khẩu của bạn</Text>
                <PasswordInput length={6} />
                <Text style={styles.description}>Nhập lại mật khẩu</Text>
                <PasswordInput length={6} />
            </View>
            <LargeButton onPress={() => navigate('Login')} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default ResetPassword;
