import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './src/screens/Notifications/Notifications';
import TabBarBottom from './src/components/TabBarBottom/TabBarBottom';
import Onboarding from './src/screens/Onboarding/Onboarding';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchResults from './src/screens/SearchResults/SearchResults';
import Authentication from './src/screens/Authentication/Authentication';
import Friends from './src/screens/Friends/Friends';
import CheckOut from './src/screens/Parking/Vehicle/CheckOut';
import VehicleDetail from './src/screens/Parking/Vehicle/VehicleDetail';
import Maps from './src/screens/Maps/Maps';
import ParkingInfo from './src/screens/ParkingInfo/ParkingInfo';
import { Provider } from 'react-redux';
import { store } from './store';
import EditProfile from './src/screens/Account/EditProfile';
import ManagePayment from './src/screens/Account/ManagePayment';
import Settings from './src/screens/Account/Settings';
import ChangePassword from './src/screens/Account/ChangePassword';
import DetailMonthTicket from './src/screens/Parking/MonthTicket/DetailMonthTicket';
import MonthTicketSubscribe from './src/screens/ParkingInfo/MonthTicketSubscribe';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from './src/constants';

const Stack = createNativeStackNavigator();

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size={'large'} />
        </View>
    );
};

export default function App() {
    const queryClient = new QueryClient();
    const [loading, setLoading] = useState(true);
    const [viewedOnboarding, setViewedOnboarding] = useState(true);

    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnboarding');
            if (value === null) {
                setViewedOnboarding(false);
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
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <StatusBar style="dark" />
                    {loading ? (
                        <Loading />
                    ) : (
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
                                {!viewedOnboarding && (
                                    <Stack.Screen
                                        name="Onboarding"
                                        component={Onboarding}
                                        options={{
                                            headerShown: false,
                                            statusBarColor: 'transparent',
                                        }}
                                    />
                                )}

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
                                    name="Maps"
                                    component={Maps}
                                    options={{
                                        title: 'Tìm đường đi',
                                    }}
                                />
                                <Stack.Screen
                                    name="ParkingInfo"
                                    component={ParkingInfo}
                                    options={{
                                        title: 'Thông tin nhà xe',
                                    }}
                                />
                                <Stack.Screen
                                    name="EditProfile"
                                    component={EditProfile}
                                    options={{
                                        title: 'Sửa thông tin cá nhân',
                                    }}
                                />
                                <Stack.Screen
                                    name="ManagePayment"
                                    component={ManagePayment}
                                    options={{
                                        title: 'Thanh toán',
                                    }}
                                />
                                <Stack.Screen
                                    name="Settings"
                                    component={Settings}
                                    options={{
                                        title: 'Cài đặt',
                                    }}
                                />
                                <Stack.Screen
                                    name="ChangePassword"
                                    component={ChangePassword}
                                    options={{
                                        title: 'Đổi mật khẩu',
                                    }}
                                />
                                <Stack.Screen
                                    name="DetailMonthTicket"
                                    component={DetailMonthTicket}
                                    options={{
                                        title: 'Chi tiết vé tháng',
                                    }}
                                />
                                <Stack.Screen
                                    name="MonthTicketSubscribe"
                                    component={MonthTicketSubscribe}
                                    options={{
                                        title: 'Đăng ký vé tháng',
                                    }}
                                />
                            </Stack.Navigator>
                        </NavigationContainer>
                    )}
                </Provider>
            </QueryClientProvider>
        </>
    );
}
