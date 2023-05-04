import { Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import FieldInput from '../../../components/FieldInput';

const ForgotPassword = () => {
    const navigation: any = useNavigation();
    const [phone, setPhone] = useState('');
    const [invalid, setInvalid] = useState(false);
    const handleFunction = () => {
        console.log('From forgot password');
    };
    const navigate = (name: string) => {
        navigation.navigate(name, { nextScreen: 'ResetPassword', action: 'forgotpassword' });
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <FieldInput
                    setValue={setPhone}
                    autoFocus={true}
                    value={phone}
                    placeHolder="Số điện thoại"
                    source={require('../../../../assets/images/phone-icon.png')}
                    iconPosition="left"
                    keyboardType="phone-pad"
                    warning={{
                        show: invalid,
                        message: 'Số điện thoại không hợp lệ!',
                    }}
                    onChange={() => setInvalid(false)}
                    maxLength={10}
                />
            </View>
            <LargeButton title="Xác nhận" style={styles.continueButton} onPress={() => navigate('PhoneVerification')} />
        </View>
    );
};

export default ForgotPassword;
