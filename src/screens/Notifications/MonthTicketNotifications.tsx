import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NotificationType } from '../../constants';
import NotificationList from './components/NotificationList';
import { useFetchNotification } from '../../hooks';

const MonthTicketNotifications = () => {
    const [
        loading,
      notifications, lazyLoad] = useFetchNotification(NotificationType.MONTH_TICKET);
    return (
        <View>
            <NotificationList loading={loading} lazyLoad={lazyLoad} notifications={notifications} />
        </View>
    );
};

export default MonthTicketNotifications;

const styles = StyleSheet.create({});
