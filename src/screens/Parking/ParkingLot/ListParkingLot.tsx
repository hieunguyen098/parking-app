import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ParkingLotItem from '../../../components/ParkingLotItem';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useQuery, useQueryClient } from 'react-query';
import { getLocations } from '../../../services/location.api';

const ListParkingLot = () => {
    const navigation: any = useNavigation();

    const queryClient = useQueryClient();

    const {
        data: parkingLocations,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['locations'],
        queryFn: () => {
            return getLocations();
        },
        select: (data) => data.data? data.data : [],
        keepPreviousData: true,
    });

    useFocusEffect(
        React.useCallback(() => {
            queryClient.fetchQuery('locations').then();
        }, []),
    );

    return (
        <>
            {isLoading ? (
                <View style={{ marginTop: 8 }}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <FlatList
                    data={parkingLocations}
                    renderItem={({ item }) => {
                        return (
                            <ParkingLotItem
                                item={item}
                                onPress={() => {
                                    navigation.navigate('ParkingInfo', { id: item.locationId });
                                }}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.locationId}
                    style={styles.contentContainer}
                />
            )}
        </>
    );
};

export default ListParkingLot;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
});
