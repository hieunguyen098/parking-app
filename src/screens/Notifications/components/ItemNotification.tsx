import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SmallButton from '../../../components/Buttons/SmallButton';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/style';
const ItemNotification = ({ item, firstItemstyle = null, lastItemStyle = null }: any) => {
    return (
        <>
            {item.type === 'parking' && (
                <View style={[styles.container, firstItemstyle, lastItemStyle]}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="parking" size={40} color={GlobalStyles.colors.primaryOrange} />
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc1}>{item.place}</Text>
                        <Text style={styles.desc1}>Tổng chi phí: {item.price}</Text>
                        <Text style={styles.update}>{item.lastUpdate}</Text>
                    </View>
                </View>
            )}
            {item.type === 'request' && (
                <View style={[styles.container, firstItemstyle, lastItemStyle]}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="user-friends" size={28} color={GlobalStyles.colors.primaryOrange} />
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.buttonContainer}>
                            <SmallButton title="Đồng ý"></SmallButton>
                            <SmallButton title="Từ chối" style={styles.negativeButton}></SmallButton>
                        </View>
                        <Text style={styles.update}>{item.lastUpdate}</Text>
                    </View>
                </View>
            )}
            {item.type === 'month-ticket' && (
                <View style={[styles.container, firstItemstyle, lastItemStyle]}>
                    <View style={styles.iconContainer}>
                        <Entypo name="ticket" size={32} color={GlobalStyles.colors.lightRed} />
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc1}>{item.duration}</Text>

                        <Text style={styles.desc1}>{item.place}</Text>
                        <Text style={styles.update}>{item.lastUpdate}</Text>
                    </View>
                </View>
            )}
        </>
    );
};

export default ItemNotification;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
    },
    iconContainer: {
        width: '16%',
        height: '100%',
        marginRight: 8,
    },
    mainContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
    },
    desc1: {
        fontSize: 16,
        color: GlobalStyles.colors.secondary,
    },
    update: {
        marginTop: 4,
        fontSize: 12,
        color: GlobalStyles.colors.lightGrey,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    negativeButton: {
        backgroundColor: GlobalStyles.colors.negative,
        marginLeft: 8,
    },
});
