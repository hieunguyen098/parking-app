import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TicketSubscribeHeader from './TicketSubscribeHeader';
import TicketSubscribeDetails from './TicketSubscribeDetails';

const TicketSubscribeContent = ({ locationDetail, number, setNumber }: any) => {
    return (
        <View style={styles.container}>
            <TicketSubscribeHeader locationDetail={locationDetail} />
            <TicketSubscribeDetails locationDetail={locationDetail} number={number} setNumber={setNumber}/>
        </View>
    );
};

export default TicketSubscribeContent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
