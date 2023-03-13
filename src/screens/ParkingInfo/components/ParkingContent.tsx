import { StyleSheet, View } from 'react-native';
import React from 'react';
import ParkingInfoHeader from './ParkingInfoHeader';
import ParkingInfoDetail from './ParkingInfoDetail';
import ParkingTicketPrice from './ParkingTicketPrice';
import ExpandableItem from './ExpandableItem';
import ParkingWorking from './ParkingWorking';

const ParkingContent = ({ locationDetail }: any) => {
    return (
        <View style={styles.container}>
            <ParkingInfoHeader
                title={locationDetail.name}
                address={locationDetail.address}
                timeStart={locationDetail.timeStart}
                timeEnd={locationDetail.timeEnd}
            />
            <ExpandableItem title="Thông tin chi tiết">
                <ParkingInfoDetail description={locationDetail.description as string} />
            </ExpandableItem>
            <ExpandableItem title={'Giá vé'}>
                <ParkingTicketPrice priceTicket={locationDetail.priceTicket} />
            </ExpandableItem>
            <ExpandableItem title={'Biểu đồ hoạt động theo giờ'}>
                <ParkingWorking dataChart={locationDetail.hourChart} />
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
