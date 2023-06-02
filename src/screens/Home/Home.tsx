import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import ListVehicle from './components/ListVehicle';
import MenuBar from './components/MenuBar';
import NewOffer from './components/NewOfferList';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deviceInfo} from '../../services/api';
import {NotifType, TIME_DISPLAY_SUCCESS} from "../../constants";
import Notification from "../../components/Notification";

const Home = () => {
    const route: any = useRoute();
    const showNotify = route?.params? route.params.showNotify : false;
    const notifyCode = route?.params?.notifyCode;
    const notifyMessage = route?.params?.notifyMessage;

    const getAccessToken = async () => {
        console.log(await AsyncStorage.getItem('accessToken'));
    };

    const [showStatus, setShowStatus] = useState(showNotify);

    useFocusEffect(
        React.useCallback(() => {
            getAccessToken().then();
            deviceInfo();
            if (showStatus) {
                setTimeout(() => {
                    setShowStatus(false);
                }, TIME_DISPLAY_SUCCESS * 1000);
            }
        }, []),
    );

    return (
        <>
            <SafeAreaView style={styles.container}>
                {showStatus && <Notification type={notifyCode == "1"? NotifType.SUCCESS : NotifType.FAILED} message={notifyMessage} />}
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
        backgroundColor: '#fff',
    },
    innerContainer: {
        flex: 1,
    },
    content: {
        marginHorizontal: 16,
        flex: 1,
    },
});
