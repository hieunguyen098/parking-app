import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useCallback, useState} from 'react';
import Title from '../../../components/Title/Title';
import OfferItem from './OfferItem';
import { useQuery, useQueryClient } from 'react-query';
import { getListVouchers } from '../../../services/voucher.api';
import { useFocusEffect } from '@react-navigation/native';

const NewOffer = () => {
    const queryClient = useQueryClient();
    const showSize = 2;
    const [expend, setExpend] = useState(false)

    const {
        data : vouchers,
        isLoading,
        error
    } = useQuery({
        queryKey: ['vouchers'],
        queryFn: () => {
            return getListVouchers();
        },
        select: (data) => (data.data ? data.data : []),
    });

    useFocusEffect(
        useCallback(() => {
            queryClient.fetchQuery('vouchers').then();
        }, []),
    );

    return (
        <View style={styles.container}>
            <Title title="Ưu đãi mới"
                   seeMore={vouchers && vouchers.length > showSize}
                   onSeeMore={() => setExpend(!expend)}
            ></Title>
            {isLoading ? (
                <Text>Loading</Text>
            ) : error ? (
                <Text>Lỗi</Text>
            ) : (
                <>
                    {
                        expend ? (
                            vouchers && vouchers.length > 0 &&
                            vouchers.map((item: any) => {
                                return <OfferItem key={item.voucherId} item={item}/>;
                            })
                        ) : (
                            vouchers && vouchers.length > 0 &&
                            vouchers.slice(0, showSize).map((item: any) => {
                                return <OfferItem key={item.voucherId} item={item}/>;
                            })
                        )
                    }
                </>
            )}
        </View>
    );
};

export default NewOffer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
