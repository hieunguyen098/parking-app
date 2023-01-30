import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OfferItem = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'http://img.giftpop.vn/brand/GIFTPOP/MP1807250002_BASIC_origin.jpg' }}
            />
            <Text style={styles.text}>Ưu đãi 30.000 hấp dẫn!! Nhanh tay nhận voucher</Text>
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
