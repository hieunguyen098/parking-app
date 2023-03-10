import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    View,
} from 'react-native';
import React from 'react';
import Header from './components/Header';
import ListVehicle from './components/ListVehicle';
import MenuBar from './components/MenuBar';
import NewOffer from './components/NewOfferList';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deviceInfo } from '../../services/api';

const Home = () => {
    const getAccessToken = async () => {
        console.log(await AsyncStorage.getItem('accessToken'));
    };

    useFocusEffect(
        React.useCallback(() => {
            getAccessToken();
            deviceInfo();
        }, []),
    );
    return (
        <>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container}>
                    <ScrollView style={styles.innerContainer} stickyHeaderIndices={[1]}>
                        <Header />
                        <MenuBar />
                        <View style={styles.content}>
                            <ListVehicle />
                            <NewOffer />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    innerContainer: {
        flex: 1,
    },
    content: {
        marginHorizontal: 16,
        flex: 1,
    },
});
