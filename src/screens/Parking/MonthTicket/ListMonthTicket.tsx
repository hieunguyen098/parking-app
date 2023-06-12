import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect} from 'react';
import MonthTicketItem from '../../../components/MonthTicketItem';
import {useQuery, useQueryClient} from "react-query";
import {getLocations} from "../../../services/location.api";
import {useFocusEffect} from "@react-navigation/native";
import {getMonthCards} from "../../../services/month-card.api";
import {useSelector} from "react-redux";

const ListMonthTicket = () => {
    const user = useSelector((state: any) => state.auth.user);

    const queryClient = useQueryClient();

    const {
        data,
    } = useQuery({
        queryKey: ['month-cards'],
        queryFn: () => {
            return getMonthCards(user.phone);
        },
        select: (data) => data.data? data.data : [],
    });

    useFocusEffect(
        React.useCallback(() => {
            queryClient.fetchQuery('month-cards').then();
        }, []),
    );

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => {
                return <MonthTicketItem item={item} />;
            }}
            keyExtractor={(item) => item.monthCardId}
            style={styles.contentContainer}
        />
    );
};

export default ListMonthTicket;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
});
