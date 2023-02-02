import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import PhoneVerification from './PhoneVerification';
import CreatePassword from './CreatePassword';

const Stack = createNativeStackNavigator();

const SignupStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTitleStyle: {
                    color: '#000',
                },
                headerTintColor: '#000',
            }}
        >
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: 'Tạo tài khoản',
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="CreatePassword"
                component={CreatePassword}
                options={{
                    title: 'Thiết lập mật khẩu',
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="PhoneVerification"
                component={PhoneVerification}
                options={{
                    title: 'Xác thực số điện thoại',
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
};

export default SignupStack;

const styles = StyleSheet.create({});
