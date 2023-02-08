import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './src/screens/Notifications/Notifications';
import TabBarBottom from './src/components/TabBarBottom/TabBarBottom';
import Onboarding from './src/screens/Onboarding/Onboarding';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyles } from './src/constants/style';
import SearchResults from './src/screens/SearchResults/SearchResults';
import Authentication from './src/screens/Authentication/Authentication';
import Friends from './src/screens/Friends/Friends';

import CheckOut from './src/screens/Parking/Vehicle/CheckOut';
import VehicleDetail from './src/screens/Parking/Vehicle/VehicleDetail';
import ParkingInfo from './src/screens/ParkingInfo/ParkingInfo';

const Stack = createNativeStackNavigator();

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size={'large'} />
        </View>
    );
};

export default function App() {
    const [loading, setLoading] = useState(false);
    const [viewedOnboarding, setViewedOnboarding] = useState(true);
    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnboarding');
            if (value !== null) {
                setViewedOnboarding(true);
            }
        } catch (err) {
            console.log('Error @checkOnboarding: ', err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        checkOnboarding();
    }, []);

    return (
        <>
            <StatusBar style="dark" />
            {loading ? (
                <Loading />
            ) : viewedOnboarding ? (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: GlobalStyles.colors.primaryOrange,
                            },
                            headerTintColor: 'white',
                            statusBarHidden: false,
                            statusBarStyle: 'dark',
                            statusBarColor: GlobalStyles.colors.primaryOrange,
                        }}
                    >
                        <Stack.Screen
                            name="Authentication"
                            component={Authentication}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="TabBarScreen"
                            component={TabBarBottom}
                            options={{
                                headerShown: false,
                                statusBarHidden: false,
                                statusBarStyle: 'dark',
                                statusBarColor: GlobalStyles.colors.primaryOrange,
                            }}
                        />
                        <Stack.Screen
                            name="Notifications"
                            component={Notifications}
                            options={{
                                title: 'Thông báo',
                                presentation: 'modal',
                            }}
                        />
                        <Stack.Screen
                            name="SearchResults"
                            component={SearchResults}
                            options={{
                                title: 'Kết quả tìm kiếm',
                            }}
                        />
                        <Stack.Screen
                            name="Friends"
                            component={Friends}
                            options={{
                                title: 'Bạn bè',
                            }}
                        />

                        <Stack.Screen
                            name="VehicleDetail"
                            component={VehicleDetail}
                            options={{
                                title: 'Chi tiết xe gửi',
                            }}
                        />
                        <Stack.Screen
                            name="CheckOut"
                            component={CheckOut}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="ParkingInfo"
                            component={ParkingInfo}
                            options={{
                                title: 'Thông tin nhà xe',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            ) : (
                <Onboarding />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
