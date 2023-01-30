import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ItemNotification from './ItemNotification';
import SmallButton from '../../../components/Buttons/SmallButton';

const NotificationList = ({ data }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    if (index === 0)
                        return (
                            <ItemNotification
                                item={item}
                                firstItemstyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                            />
                        );
                    else if (index === data.length - 1)
                        return (
                            <ItemNotification
                                item={item}
                                lastItemStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                            />
                        );
                    else return <ItemNotification item={item} />;
                }}
                keyExtractor={(item) => item.id}
                style={styles.innerContainer}
                contentContainerStyle={styles.contentContainer}
            />
        </SafeAreaView>
    );
};

export default NotificationList;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    innerContainer: {
        width: '100%',
    },
    contentContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 16,
    },
});
