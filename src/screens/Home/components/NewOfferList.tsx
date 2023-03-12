import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import Title from '../../../components/Title/Title';
import OfferItem from './OfferItem';
import { useQuery, useQueryClient } from 'react-query';
import { getListVouchers } from '../../../utils/voucher.api';
import { useFocusEffect } from '@react-navigation/native';

const NewOffer = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery({
        queryKey: ['vouchers'],
        queryFn: () => {
            return getListVouchers();
        },
    });

    useFocusEffect(
        useCallback(() => {
            queryClient.invalidateQueries('vouchers');
        }, []),
    );

    return (
        <View style={styles.container}>
            <Title title="Ưu đãi mới"></Title>
            {isLoading ? (
                <Text>Loading</Text>
            ) : error ? (
                <Text>Lỗi</Text>
            ) : (
                data.vouchers.map((item: any) => {
                    return <OfferItem key={item.id} item={item} />;
                })
            )}
            {/* <OfferItem /> */}
            {/* <OfferItem />
            <OfferItem />
            <OfferItem /> */}
        </View>
    );
};

export default NewOffer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
