import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import BottomButton from '../../components/Buttons/BottomButton';

const ChangePassword = () => {
    const [pin, setPin] = useState('');
    const [newPin, setNewPin] = useState('');
    const [newPinConfirm, setNewPinConfirm] = useState('');
    const [isWrongPassword, setIsWrongPassword] = useState(false);
    const [isNotSame, setIsNotSame] = useState(false);
    const onChange = () => {
        setIsWrongPassword(false);
        setIsNotSame(false);
    };
    const changePassword = () => {
        if (newPin === newPinConfirm) {
            console.log('change passs');
        } else {
            setIsNotSame(true);
        }
    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Nhập mật khẩu hiện tại</Text>
                <PasswordInput
                    warning={{ show: isWrongPassword, message: 'Sai mật khẩu hiện tại' }}
                    length={6}
                    onChange={onChange}
                    value={pin}
                    setValue={setPin}
                />
                <Text style={styles.text}>Nhập mật khẩu mới</Text>
                <PasswordInput
                    warning={{ show: isNotSame, message: 'Mật khẩu mới không khớp' }}
                    length={6}
                    onChange={onChange}
                    value={newPin}
                    setValue={setNewPin}
                />
                <Text style={styles.text}>Nhập lại mật khẩu mới</Text>
                <PasswordInput
                    warning={{ show: isNotSame, message: 'Mật khẩu mới không khớp' }}
                    length={6}
                    onChange={onChange}
                    value={newPinConfirm}
                    setValue={setNewPinConfirm}
                />
            </View>
            <BottomButton title="Xác nhận" onPress={changePassword} />
        </>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
});
