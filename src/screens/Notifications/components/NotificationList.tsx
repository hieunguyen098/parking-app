import { FlatList, SafeAreaView, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ItemNotification from './ItemNotification';
import SmallButton from '../../../components/Buttons/SmallButton';

const NotificationList = ({ notifications, lazyLoad, loading }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={({ item, index }) => {
                    if (index === 0)
                        return (
                            <ItemNotification
                                key={item.id}
                                item={item}
                                firstItemstyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                            />
                        );
                    else if (index === notifications.length - 1)
                        return (
                            <ItemNotification
                                key={item.id}
                                item={item}
                                lastItemStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                            />
                        );
                    else return <ItemNotification key={item.id} item={item} />;
                }}
                keyExtractor={(item) => item.id}
                style={styles.innerContainer}
                contentContainerStyle={styles.contentContainer}
                onEndReached={lazyLoad}
                ListFooterComponent={loading && <ActivityIndicator size={'large'} />}
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
