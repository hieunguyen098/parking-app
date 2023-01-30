import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../../../components/Title/Title';
import OfferItem from './OfferItem';

const NewOffer = () => {
    return (
        <View style={styles.container}>
            <Title title="Ưu đãi mới"></Title>
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
        </View>
    );
};

export default NewOffer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
