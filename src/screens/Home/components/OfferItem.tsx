import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OfferItem = ({ item }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <Image style={styles.image} resizeMode={"contain"} source={{ uri: (`${item.imageUrl}` == '')?
            "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/voucher%2Fmissing-image.png?alt=media&token=7c9dc156-35af-46b2-b5b5-e48ea7d60450"
            : `${item.imageUrl}`}} />
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
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 27,
        color: '#404040',
        borderBottomWidth: 1,
        borderColor: "gray",
        borderStyle: "dashed"
    },
});
