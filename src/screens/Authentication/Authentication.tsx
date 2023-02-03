import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/Login';
import Discover from './Discover';
import SignUp from './SignUp/SignUp';
import CreatePassword from './SignUp/CreatePassword';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import PhoneVerification from './PhoneVerification';
import ResetPassword from './ForgotPassword/ResetPassword';

const Stack = createNativeStackNavigator();

const Authentication = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                statusBarColor: '#fff',
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
                name="Login"
                component={Login}
                options={{
                    title: 'Đăng nhập',
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
                name="PhoneVerification"
                component={PhoneVerification}
                options={{
                    title: 'Xác thực số điện thoại',
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    title: 'Quên mật khẩu',
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                    title: 'Thiết lập mật khẩu mới',
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
};

export default Authentication;

const styles = StyleSheet.create({});
