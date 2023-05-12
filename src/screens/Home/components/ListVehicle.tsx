import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title';
import ItemVehicle from './ItemVehicle';
import { useFocusEffect } from '@react-navigation/native';
import { getListVehicle } from '../../../services/vehicle.api';
import { useQuery, useQueryClient } from 'react-query';
import {useDispatch, useSelector} from "react-redux";

const ListVehicle = () => {
    const queryClient = useQueryClient();
    const showSize = 2;
    const [expend, setExpend] = useState(false)
    const user = useSelector((state: any) => state.auth.user);

    const {
        data: parkingVehicles,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['vehicles'],
        queryFn: () => {
            return getListVehicle(user.phone);
        },
        select: (data) => (data.data? data.data : []),
        keepPreviousData: true,
    });

    useFocusEffect(
        React.useCallback(() => {
            queryClient.fetchQuery('vehicles').then();
        }, [expend]),
    );

    return (
        <View>
            <Title title="Danh sách xe gửi"
                   seeMore={parkingVehicles && parkingVehicles.length > showSize}
                   onSeeMore={() => setExpend(!expend)}
            />
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : error ? (
                <Text>Lôĩ</Text>
            ) : (
                <View style={styles.listVehicle}>
                    { expend ? (
                        <>
                            {(parkingVehicles && parkingVehicles.length > 0) ?
                                (
                                    parkingVehicles.map((item: any) => {
                                        return <ItemVehicle text={item.licensePlate} key={item.vehicleId} id={item.vehicleId} />;
                                    })
                                ) : (
                                    <ItemVehicle text={"Chưa có xe nào đang gửi"} key={""} id={""} />
                                )
                            }
                        </>
                    ): (
                        <>
                            {(parkingVehicles && parkingVehicles.length > 0) ?
                                (
                                    parkingVehicles.slice(0, showSize).map((item: any) => {
                                        return <ItemVehicle text={item.licensePlate} key={item.vehicleId} id={item.vehicleId} />;
                                    })
                                ) : (
                                    <ItemVehicle text={"Chưa có xe nào đang gửi"} key={""} id={""} />
                                )
                            }
                        </>
                    )}
                </View>
            )}
        </View>
    );
};

export default ListVehicle;

const styles = StyleSheet.create({
    listVehicle: {},
});
