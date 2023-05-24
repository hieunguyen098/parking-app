import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants';
import moment from "moment/moment";
const HistoryItem = ({ item, style = null }: any) => {
    const formattedDate = (dateString: string) => {
        return moment(dateString).format('HH:mm DD/MM/YYYY');
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.iconContainer}>
                {item.type === 'month-ticket' && (
                    <Entypo name="ticket" size={32} color={GlobalStyles.colors.lightRed} />
                )}

                {item.type === 'parking' && (
                    <FontAwesome5 name="parking" size={40} color={GlobalStyles.colors.primaryOrange} />
                )}
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.place}>{item.extraInfo.place}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.extraInfo.price}</Text>
            </View>
        </View>
    );
};

export default HistoryItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        flex: 1,
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 2,
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomColor: GlobalStyles.colors.lightGrey100,
        borderBottomWidth: 1,
        minHeight: 100,
    },
    iconContainer: {
        marginRight: 12,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    place: { color: GlobalStyles.colors.lightGrey },
    time: { color: GlobalStyles.colors.lightGrey, fontSize: 12 },
    priceContainer: {
        justifyContent: 'flex-end',
        marginLeft: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: '500',
    },
});
