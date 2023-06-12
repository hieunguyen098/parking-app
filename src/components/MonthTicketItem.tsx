import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";

const MonthTicketItem = ({ item }: any) => {
    const navigation: any = useNavigation();

    const convertDueDate = (numOfMonth: string, startDate: string) => {
        if (!isNaN(parseInt(numOfMonth))) {
            return moment(startDate).add(parseInt(numOfMonth), "month").format("DD/MM/YYYY");
        } else {
            return "NaN"
        }
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.innerContainer}
                onPress={() => navigation.navigate('DetailMonthTicket', {
                    item: item
                })}
                android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: `${item.locationImageUrl}`,
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.locationName}</Text>
                    <Text style={[styles.duedate, styles.desc]}>Có giá trị đến hết ngày {convertDueDate(item.number, item.startDate)}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default MonthTicketItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: GlobalStyles.colors.lightGrey100,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
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
    duedate: {
        marginRight: 8,
        color: GlobalStyles.colors.lightGrey,
        fontStyle: 'italic',
        textAlign: 'right',
    },
});
