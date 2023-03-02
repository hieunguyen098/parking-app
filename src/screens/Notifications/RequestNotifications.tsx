import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NotificationType } from '../../constants';
import NotificationList from './components/NotificationList';
import { useFetchNotification } from '../../hooks';

const RequestNotifications = () => {
    const [loading, notifications, lazyLoad] = useFetchNotification(NotificationType.REQUEST);
    return (
        <View>
            <NotificationList loading={loading} lazyLoad={lazyLoad} notifications={notifications} />
        </View>
    );
};

export default RequestNotifications;

const styles = StyleSheet.create({});
