import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../constants';
import { useNavigation } from '@react-navigation/native';

const ParkingLotItem = ({ item, onPress }: any) => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={styles.innerContainer} onPress={onPress}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: (`${item.imageUrl}` == null || `${item.imageUrl}` == '') ?
                            "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Fdefault.jpeg?alt=media&token=5a4190b2-24cc-485e-8d71-1673ccf4560b"
                            : `${item.imageUrl}`,
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.locationName}</Text>
                    <View style={styles.descContainer}>
                        <MaterialIcons name="place" size={16} style={styles.icon} />
                        {/* <Text style={[styles.desc1, styles.desc]}>{item.distance}</Text> */}
                        <Text style={[styles.desc2, styles.desc]}>{item.address}</Text>
                    </View>
                </View>
            </Pressable>
            <Entypo
                onPress={() => {
                    if (item.mapUrl && item.mapUrl != "") {
                        Linking.openURL(item.mapUrl)
                    }
                }}
                name="direction"
                size={28}
                color={GlobalStyles.colors.primaryOrange}
            />
        </View>
    );
};

export default ParkingLotItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.lightGrey100,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    imageContainer: {
        marginRight: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    descContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    desc: {
        fontSize: 12,
    },
    desc1: { marginRight: 8, color: GlobalStyles.colors.primaryOrange },
    desc2: { color: GlobalStyles.colors.lightGrey },
    icon: {
        color: GlobalStyles.colors.primaryOrange,
    },
});
