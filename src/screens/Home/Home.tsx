import { StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import ListVehicle from './components/ListVehicle';
import MenuBar from './components/MenuBar';
import NewOffer from './components/NewOfferList';

const Home = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.innerContainer}>
                    <KeyboardAvoidingView style={styles.container}>
                        <ScrollView style={styles.container}>
                            <Header />
                            <View style={styles.content}>
                                <MenuBar />
                                <ListVehicle />
                                <NewOffer />
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        marginTop: 40,
    },
    content: {
        marginHorizontal: 16,
        flex: 1,
    },
});
