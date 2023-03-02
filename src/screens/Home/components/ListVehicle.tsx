import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title';
import ItemVehicle from './ItemVehicle';
import { useFocusEffect } from '@react-navigation/native';
import { getListVehicle } from '../../../utils/vehicle.api';
import { useQuery, useQueryClient } from 'react-query';

const ListVehicle = () => {
    const queryClient = useQueryClient();

    const { data: parkingVehicles, isLoading } = useQuery({
        queryKey: ['vehicles'],
        queryFn: () => {
            return getListVehicle();
        },
        select: (data) => data.vehicles,
        keepPreviousData: true,
    });

    useFocusEffect(
        React.useCallback(() => {
            queryClient.invalidateQueries('vehicles');
        }, []),
    );

    return (
        <View>
            <Title title="Danh sách xe gửi" />
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <View style={styles.listVehicle}>
                    {parkingVehicles.length > 0 &&
                        parkingVehicles.map((item: any) => {
                            return <ItemVehicle text={item.license_plates} key={item.id} id={item.id} />;
                        })}
                </View>
            )}
        </View>
    );
};

export default ListVehicle;

const styles = StyleSheet.create({
    listVehicle: {},
});
