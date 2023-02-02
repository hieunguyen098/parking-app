import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './LoginStack/Login';
import Discover from './Discover';
import SignUp from './SignupStack/SignUp';
import CreatePassword from './SignupStack/CreatePassword';
import PhoneVerification from './LoginStack/PhoneVerification';
import ForgotPassword from './ForgotPasswordStack/ForgotPassword';
import SignupStack from './SignupStack/SignupStack';
import LoginStack from './LoginStack/LoginStack';
import ForgotPasswordStack from './ForgotPasswordStack/ForgotPasswordStack';

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
                name="SignupStack"
                component={SignupStack}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ForgotPasswordStack"
                component={ForgotPasswordStack}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default Authentication;

const styles = StyleSheet.create({});
