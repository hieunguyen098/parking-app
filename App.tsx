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

const Stack = createNativeStackNavigator();

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size={'large'} />
        </View>
    );
};

export default function App() {
    const [loading, setLoading] = useState(true);
    const [viewedOnboarding, setViewedOnboarding] = useState(false);
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
            <StatusBar />
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
                    }}
                >
                    <Stack.Screen name="TabBarScreen" component={TabBarBottom} options={{ headerShown: false }} />
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
