import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllNotifications from './AllNotifications';
import ParkingNotifications from './ParkingNotifications';
import RequestNotifications from './RequestNotifications';
import MonthTicketNotifications from './MonthTicketNotifications';
import { GlobalStyles } from '../../constants/style';

const Tab = createMaterialTopTabNavigator();
const Notifications = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: GlobalStyles.colors.primaryOrange,
                tabBarInactiveTintColor: GlobalStyles.colors.secondary,
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: 100,
                },
                tabBarPressColor: GlobalStyles.colors.primaryOrange,
                lazy: true,
                tabBarIndicatorStyle: {
                    backgroundColor: GlobalStyles.colors.primaryOrange,
                },
            }}
        >
            <Tab.Screen
                name="All"
                component={AllNotifications}
                options={{
                    title: 'Tất cả',
                }}
            />
            <Tab.Screen
                name="Parking"
                component={ParkingNotifications}
                options={{
                    title: 'Gửi xe',
                }}
            />
            <Tab.Screen
                name="Request"
                component={RequestNotifications}
                options={{
                    title: 'Yêu cầu',
                }}
            />
            <Tab.Screen
                name="Month Ticket"
                component={MonthTicketNotifications}
                options={{
                    title: 'Vé tháng',
                }}
            />
        </Tab.Navigator>
    );
};

export default Notifications;

const styles = StyleSheet.create({});
