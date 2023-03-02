import { StyleSheet, View } from 'react-native';
import React from 'react';
import NotificationList from './components/NotificationList';
import { NotificationType } from '../../constants';
import { useFetchNotification } from '../../hooks';

const AllNotifications = () => {
    const [loading, notifications, lazyLoad] = useFetchNotification(NotificationType.ALL);

    return (
        <View style={styles.container}>
            <NotificationList loading={loading} lazyLoad={lazyLoad} notifications={notifications} />
        </View>
    );
};

export default AllNotifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
