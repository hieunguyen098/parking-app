import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import QrScanner from './screens/QrScanner/QrScanner';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NumberPlateScanner from './screens/NumberPlateScanner/NumberPlateScanner';

const BottomTabs = createBottomTabNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer style={styles.container}>
                <BottomTabs.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: '#000',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: '#000',
                    }}
                >
                    <BottomTabs.Screen
                        name="QrScanner"
                        component={QrScanner}
                        options={{
                            title: 'Quét mã QR',
                            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                        }}
                    />
                    <BottomTabs.Screen
                        name="NumberPlateScanner"
                        component={NumberPlateScanner}
                        options={{
                            title: 'Quét biển số',
                            tabBarIcon: ({ color, size }) => <Ionicons name="time-sharp" size={size} color={color} />,
                        }}
                    />
                </BottomTabs.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
