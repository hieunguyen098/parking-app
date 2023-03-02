import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OfferItem = ({ item }: any) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `${item.image}` }} />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );
};

export default OfferItem;

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#404040',
    },
});
