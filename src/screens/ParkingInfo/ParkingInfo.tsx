import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ImageCarousel from './components/ImageCarousel';
import { ScrollView } from 'react-native-gesture-handler';
import ParkingContent from './components/ParkingContent';
import { useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { getLocationDetail } from '../../services/location.api';

const ParkingInfo = () => {
    const route: any = useRoute();
    const idLocation = route?.params?.id;
    const {
        data: locationDetail,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['location', idLocation],
        queryFn: () => {
            return getLocationDetail(idLocation);
        },
        retry: false,
        select: (data) => (data.data && data.data.length > 0) ? data.data[0] : null,
    });

    return (
        <ScrollView style={styles.container}>
            {isLoading && (
                <View style={{ marginTop: 8 }}>
                    <ActivityIndicator size="large" />
                </View>
            )}
            {!isLoading && locationDetail && locationDetail.imageUrl.length > 0 && <ImageCarousel images={[locationDetail.imageUrl]} />}
            {!isLoading && locationDetail && <ParkingContent locationDetail={locationDetail} />}
        </ScrollView>
    );
};

export default ParkingInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
