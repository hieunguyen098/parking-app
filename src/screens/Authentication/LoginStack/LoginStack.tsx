import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import PhoneVerification from './PhoneVerification';
const Stack = createNativeStackNavigator();

const LoginStack = () => {
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
                name="Login"
                component={Login}
                options={{
                    title: 'Đăng nhập',
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

export default LoginStack;

const styles = StyleSheet.create({});
