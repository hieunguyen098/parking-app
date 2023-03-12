import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ParkingLotItem from '../../../components/ParkingLotItem';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useQuery, useQueryClient } from 'react-query';
import { getLocations } from '../../../utils/location.api';

const data = [
    {
        key: '0',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        distance: '4km',
        place: 'Thủ Đức',
    },
    {
        key: '1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        distance: '9km',
        place: 'Quận 9',
    },
    {
        key: '2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        distance: '4km',
        place: 'Thủ Đức',
    },
    {
        key: '3',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        distance: '9km',
        place: 'Quận 9',
    },
    {
        key: '4',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        distance: '4km',
        place: 'Thủ Đức',
    },
    {
        key: '5',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        distance: '9km',
        place: 'Quận 9',
    },
    {
        key: '6',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        distance: '4km',
        place: 'Thủ Đức',
    },
    {
        key: '7',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        distance: '9km',
        place: 'Quận 9',
    },
    {
        key: '8',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        distance: '4km',
        place: 'Thủ Đức',
    },
    {
        key: '9',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        distance: '9km',
        place: 'Quận 9',
    },
    {
        key: '10',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão',
        distance: '4km',
        place: 'Thủ Đức',
    },
    {
        key: '11',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG',
        name: 'Nhà xe Hoài Bão 2',
        distance: '9km',
        place: 'Quận 9',
    },
];

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
        select: (data) => data.data,
        keepPreviousData: true,
    });

    useFocusEffect(
        React.useCallback(() => {
            queryClient.invalidateQueries('locations');
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
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <ParkingLotItem
                                item={item}
                                onPress={() => {
                                    navigation.navigate('ParkingInfo');
                                }}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.key}
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
