import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SmallButton from '../../../components/Buttons/SmallButton';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/style';
import { NotificationType } from '../../../constants';
import moment from 'moment';

const ItemNotification = ({ item, firstItemstyle = null, lastItemStyle = null }: any) => {
    return (
        <View key={item.id} style={[styles.container, firstItemstyle, lastItemStyle]}>
            <View style={styles.iconContainer}>
                {item.type === NotificationType.PARKING ? (
                    <FontAwesome5 name="parking" size={40} color={GlobalStyles.colors.primaryOrange} />
                ) : item.type === NotificationType.REQUEST ? (
                    <FontAwesome5 name="user-friends" size={28} color={GlobalStyles.colors.primaryOrange} />
                ) : (
                    <Entypo name="ticket" size={32} color={GlobalStyles.colors.lightRed} />
                )}
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{item.title}</Text>
                {item.extra_info.is_have_api ? (
                    <View style={styles.buttonContainer}>
                        {item.extra_info.apiList.map((item: any) => {
                            if (item.api === 'accept') {
                                return <SmallButton key={item.api} title={item.title}></SmallButton>;
                            } else {
                                return (
                                    <SmallButton
                                        key={item.api}
                                        title="Từ chối"
                                        style={styles.negativeButton}
                                    ></SmallButton>
                                );
                            }
                        })}
                    </View>
                ) : (
                    <Text style={styles.desc1}>{item.extra_info.description}</Text>
                )}
                <Text style={styles.update}>{moment(item.created_at * 1000).fromNow()}</Text>
            </View>
        </View>
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
