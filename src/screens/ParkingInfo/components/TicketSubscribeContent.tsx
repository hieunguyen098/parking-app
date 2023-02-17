import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TicketSubscribeHeader from './TicketSubscribeHeader';
import TicketSubscribeDetails from './TicketSubscribeDetails';

const TicketSubscribeContent = () => {
    return (
        <View style={styles.container}>
            <TicketSubscribeHeader />
            <TicketSubscribeDetails />
        </View>
    );
};

export default TicketSubscribeContent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
