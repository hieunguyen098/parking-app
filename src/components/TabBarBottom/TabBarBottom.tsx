import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home/Home';
import History from '../../screens/History/History';
import Qr from '../../screens/CheckinQR';
import Parking from '../../screens/Parking/Parking';
import Account from '../../screens/Account/Account';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants';

const BottomTabs = createBottomTabNavigator();

const TabBarBottom = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: GlobalStyles.colors.primaryOrange,
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primaryOrange,
                },
                headerTintColor: 'white',
            }}
        >
            <BottomTabs.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    title: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="History"
                component={History}
                options={{
                    title: 'Lịch sử',
                    tabBarIcon: ({ color, size }) => <Ionicons name="time-sharp" size={size} color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="Gửi xe"
                component={Qr}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.qrContainer}>
                            <AntDesign name="qrcode" size={24} color="white" style={styles.qrIcon} />
                        </View>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Parking"
                component={Parking}
                options={{
                    title: 'Gửi xe',
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="parking" size={size} color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="Account"
                component={Account}
                options={{
                    title: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default TabBarBottom;

const styles = StyleSheet.create({
    qrContainer: {
        backgroundColor: GlobalStyles.colors.primaryOrange,
        height: 40,
        width: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    qrIcon: {},
});
