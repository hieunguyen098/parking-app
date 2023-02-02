import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './ForgotPassword';
import PhoneVerification from './PhoneVerification';
import CreatePassword from './CreatePassword';


const Stack = createNativeStackNavigator();

const ForgotPasswordStack = () => {
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
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    title: 'Quên mật khẩu',
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
            <Stack.Screen
                name="CreatePassword"
                component={CreatePassword}
                options={{
                    title: 'Thiết lập mật khẩu',
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
};

export default ForgotPasswordStack;

const styles = StyleSheet.create({});
