import { StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Header from './components/Header';
import ListVehicle from './components/ListVehicle';
import MenuBar from './components/MenuBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }: any) => {
    const clearViewedOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (err) {
            console.log('Error @removeItem: ', err);
        }
    };
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <MenuBar />
                        <ListVehicle />
                        <TouchableOpacity onPress={clearViewedOnboarding}>
                            <Text>Clear viewedOnboarding</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {},
    content: {
        marginHorizontal: 16,
    },
});
