import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import { FontAwesome5 } from '@expo/vector-icons';
import IconWithBottomText from '../../components/IconWithBottomText/IconWithBottomText';
import HistoryList from './components/HistoryList';
const History = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.searchContainer}>
                    <SearchInput placeholder=" Tìm kiếm lịch sử" />
                </View>
                <View style={styles.iconContainer}>
                    <IconWithBottomText title="Bộ lọc" name="filter" Icon={FontAwesome5} />
                </View>
            </View>
            <View style={styles.historyContainer}>
                <HistoryList />
            </View>
        </SafeAreaView>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer: {
        flex: 1,
    },
    iconContainer: {
        marginLeft: 16,
    },
    historyContainer: { flex: 1 },
});
