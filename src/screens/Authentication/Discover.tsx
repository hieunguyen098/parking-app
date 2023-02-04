import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LargeButton from '../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FieldInput from '../../components/FieldInput';

const Discover = () => {
    const navigation: any = useNavigation();
    const nextStep = () => {
        navigation.navigate('Login');
    };
    const clearViewedOnboarding = async () => {
        await AsyncStorage.removeItem('@viewedOnboarding');
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.description}>Nhập số điện thoại để đăng ký hoặc đăng nhập</Text>
                <FieldInput
                    placeHolder="Số điện thoại"
                    source={require('../../../assets/images/phone-icon.png')}
                    iconPosition="left"
                    keyboardType="phone-pad"
                />
                <LargeButton
                    onPress={() => navigation.navigate('TabBarScreen')}
                    title="Vào trang chủ"
                    style={styles.continueButton}
                />
                <LargeButton
                    onPress={() => navigation.navigate('Login')}
                    title="Đăng nhập"
                    style={styles.continueButton}
                />
                <LargeButton
                    onPress={() => navigation.navigate('SignUp')}
                    title="Đăng ký"
                    style={styles.continueButton}
                />
                <LargeButton
                    onPress={clearViewedOnboarding}
                    title="clear ViewedOnboarding"
                    type="secondary"
                    style={styles.continueButton}
                />
            </View>
            <LargeButton onPress={nextStep} type="primary" title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default Discover;
