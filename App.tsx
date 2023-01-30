import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './src/screens/Notifications';
import TabBarBottom from './src/components/TabBarBottom/TabBarBottom';
import Onboarding from './src/screens/Onboarding/Onboarding';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                    <Stack.Navigator>
                        <Stack.Screen name="TabBarScreen" component={TabBarBottom} options={{ headerShown: false }} />
                        <Stack.Screen
                            name="Notifications"
                            component={Notifications}
                            options={{
                                presentation: 'modal',
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
