import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NotificationList from './components/NotificationList';
import { NotificationType } from '../../constants';
import { useFetchNotification } from '../../hooks';

const ParkingNotifications = () => {
    const [loading, notifications, lazyLoad] = useFetchNotification(NotificationType.PARKING);
    return (
        <View style={styles.container}>
            <NotificationList loading={loading} lazyLoad={lazyLoad} notifications={notifications} />
        </View>
    );
};

export default ParkingNotifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
