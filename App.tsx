import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './src/screens/Notifications/Notifications';
import TabBarBottom from './src/components/TabBarBottom/TabBarBottom';
import { GlobalStyles } from './src/constants/style';
import SearchResults from './src/screens/SearchResults/SearchResults';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
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
