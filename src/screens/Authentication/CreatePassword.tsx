import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LargeButton from '../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import PasswordInput from './components/PasswordInput/PasswordInput';
import PinCodeInput from './components/PinCodeInput/PinCodeInput';

const CreatePassword = () => {
    const navigation: any = useNavigation();
    const nextStep = () => {
        navigation.navigate('CreatePassword');
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.description}>Nhập mật khẩu của bạn</Text>
                <PasswordInput length={6} />
                <Text style={styles.description}>Nhập lại mật khẩu</Text>
                <PasswordInput length={6} />
                <PinCodeInput length={4} />
            </View>
            <LargeButton onPress={nextStep} type="primary" title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default CreatePassword;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 16,
    },
    continueButton: {
        marginBottom: 24,
        borderRadius: 100,
    },
});
