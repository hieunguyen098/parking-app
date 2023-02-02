import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LargeButton from '../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import FieldInput from './components/FieldInput';

const Discover = () => {
    const navigation: any = useNavigation();
    const nextStep = () => {
        navigation.navigate('SignUp');
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.description}>Nhập số điện thoại để đăng ký hoặc đăng nhập</Text>
                <FieldInput
                    placeHolder="Số điện thoại"
                    source={require('../../../assets/images/phone-icon.png')}
                    iconPosition="left"
                    keyboardType="phone-pad"
                />
                <LargeButton
                    onPress={() => navigation.navigate('TabBarScreen')}
                    type="primary"
                    title="Vào trang chủ"
                    style={styles.continueButton}
                />
            </View>
            <LargeButton onPress={nextStep} type="primary" title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default Discover;

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
