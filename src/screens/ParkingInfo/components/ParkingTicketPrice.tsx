import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../constants';

const ParkingTicketPrice = ({ priceTicket }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <View style={styles.emptyItem}></View>
                <View style={styles.labelItem}>
                    <Text style={styles.labelText}>Giá bắt đầu</Text>
                </View>
                <View style={styles.labelItem}>
                    <Text style={styles.labelText}>Giá phụ thu</Text>
                </View>
            </View>
            {priceTicket.length > 0 &&
                priceTicket.map((item: any) => {
                    return (
                        <View style={styles.dayContainer} key={item.day}>
                            <View style={styles.emptyItem}>
                                <Text>{item.day === '8' ? 'CN' : `T${item.day}`}</Text>
                            </View>
                            <View style={styles.dayItem}>
                                <Text style={styles.itemText}>
                                    Trong {item.startEndIn} đầu: <Text style={styles.priceText}>{item.startPrice}</Text>{' '}
                                </Text>
                            </View>
                            <View style={styles.dayItem}>
                                <Text style={styles.itemText}>
                                    Sau {item.startEndIn} đầu:{' '}
                                    <Text style={styles.additionalPriceText}>{item.afterPrice} </Text>
                                </Text>
                            </View>
                        </View>
                    );
                })}
        </View>
    );
};

export default ParkingTicketPrice;

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
    },
    labelContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        backgroundColor: 'green',
    },
    labelItem: {
        width: '45%',
    },
    labelText: { color: 'white' },
    emptyItem: {
        width: '10%',
    },
    dayContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.lightGrey100,
    },
    dayItem: {
        width: '45%',
    },
    itemText: {},
    priceText: {
        color: '#14bf3d',
    },
    additionalPriceText: {
        color: '#AE1E88',
    },
});
