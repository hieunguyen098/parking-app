import {StyleSheet, Text, View} from 'react-native';
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
                id={locationDetail.locationId}
                title={locationDetail.locationName}
                address={locationDetail.address}
                timeStart={locationDetail.timeStart}
                timeEnd={locationDetail.timeEnd}
            />
            <ExpandableItem title="Thông tin chi tiết">
                <Text style={{fontSize: 15, fontWeight: "bold"}}>{`Trạng thái nhà xe: ${locationDetail.currentSlot}  / ${locationDetail.maxSlot}`}</Text>
                <ParkingInfoDetail description={locationDetail.description as string} />
            </ExpandableItem>
            <ExpandableItem title={'Giá vé'}>
                <ParkingTicketPrice priceTicket={locationDetail.priceTicket} />
            </ExpandableItem>
            {/*<ExpandableItem title={'Biểu đồ hoạt động theo giờ'}>*/}
            {/*    <ParkingWorking dataChart={locationDetail.hourChart} />*/}
            {/*</ExpandableItem>*/}
        </View>
    );
};

export default ParkingContent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
