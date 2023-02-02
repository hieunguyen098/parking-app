import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GlobalStyles } from '../../constants/style';
import ParkingLot from './ParkingLot/ParkingLot';
import MonthTicket from './MonthTicket/MonthTicket';
import Vehicle from './Vehicle/Vehicle';

const Tab = createMaterialTopTabNavigator();

const Parking = () => {
    const { width } = useWindowDimensions();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: GlobalStyles.colors.primaryOrange,
                tabBarInactiveTintColor: GlobalStyles.colors.secondary,
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: (1 / 3) * width,
                },
                tabBarPressColor: GlobalStyles.colors.primaryOrange,
                lazy: true,
                tabBarIndicatorStyle: {
                    backgroundColor: GlobalStyles.colors.primaryOrange,
                },
            }}
        >
            <Tab.Screen
                name="ParkingLot"
                component={ParkingLot}
                options={{
                    title: 'Bãi đỗ xe',
                }}
            />
            <Tab.Screen
                name="MonthTicket"
                component={MonthTicket}
                options={{
                    title: 'Vé tháng',
                }}
            />
            <Tab.Screen
                name="Vehicle"
                component={Vehicle}
                options={{
                    title: 'Xe gửi',
                }}
            />
        </Tab.Navigator>
    );
};

export default Parking;

const styles = StyleSheet.create({});
