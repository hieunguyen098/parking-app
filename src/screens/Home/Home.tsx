import { StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import ListVehicle from './components/ListVehicle';
import MenuBar from './components/MenuBar';

const Home = ({ navigation }: any) => {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <MenuBar />
                        <ListVehicle />
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
