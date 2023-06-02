import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SmallButton from '../../../components/Buttons/SmallButton';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants';
import { NotificationType } from '../../../constants';
import moment from 'moment';

const ItemNotification = ({ item, firstItemStyle = null, lastItemStyle = null }: any) => {
    const [message, setMessage] = useState("");
    return (
        <View key={item.notificationId} style={[styles.container, firstItemStyle, lastItemStyle]}>
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
                {item.extraInfo.haveApi ? (
                    <View style={styles.buttonContainer}>
                        {message == "" && item.extraInfo.apiList.map((apiItem: any) => {
                            if (apiItem.title === 'Chấp nhận') {
                                return <SmallButton key={apiItem.api} onPress={() => setMessage("Đã chấp nhận")} api={apiItem.api} title={apiItem.title}></SmallButton>;
                            } else {
                                return (
                                    <SmallButton
                                        key={apiItem.api}
                                        api={apiItem.api}
                                        title="Từ chối"
                                        onPress={() => setMessage("Đã từ chối")}
                                        style={styles.negativeButton}
                                    ></SmallButton>
                                );
                            }
                        })}
                        {message != "" && <Text>   {message}</Text>}
                    </View>
                ) : (
                    <Text style={styles.desc1}>{item.extraInfo.description}</Text>
                )}
                <Text style={styles.update}>{moment(item.createdAt).fromNow()}</Text>
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
        marginBottom: 3,
    },
    iconContainer: {
        borderRadius: 10,
        width: '14%',
        height: '100%',
        marginRight: 10,
        alignItems: "center",

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
