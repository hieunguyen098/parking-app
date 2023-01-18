import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './src/screens/Notifications';
import TabBarBottom from './src/components/TabBarBottom/TabBarBottom';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar />
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
