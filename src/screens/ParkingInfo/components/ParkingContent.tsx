import { StyleSheet, View } from 'react-native';
import React from 'react';
import ParkingInfoHeader from './ParkingInfoHeader';
import ParkingInfoDetail from './ParkingInfoDetail';
import ParkingTicketPrice from './ParkingTicketPrice';
import ExpandableItem from './ExpandableItem';
import ParkingWorking from './ParkingWorking';

const ParkingContent = () => {
    return (
        <View style={styles.container}>
            <ParkingInfoHeader />
            <ExpandableItem title='Thông tin chi tiết'>
                <ParkingInfoDetail />
            </ExpandableItem>
            <ExpandableItem title={"Giá vé"}>
                <ParkingTicketPrice />
            </ExpandableItem>
            <ExpandableItem title={"Biểu đồ hoạt động theo giờ"}>
                <ParkingWorking />
            </ExpandableItem>
        </View>
    );
};

export default ParkingContent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
