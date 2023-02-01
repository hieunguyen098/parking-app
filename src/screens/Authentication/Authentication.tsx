import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Discover from './Discover';
import SignUp from './SignUp';
import CreatePassword from './CreatePassword';

const Stack = createNativeStackNavigator();

const Authentication = () => {
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
                name="Discover"
                component={Discover}
                options={{
                    title: 'Khám phá ngay',
                    presentation: 'modal',
                }}
            />
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
                name="Login"
                component={Login}
                options={{
                    title: 'Đăng nhập',
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
};

export default Authentication;

const styles = StyleSheet.create({});
