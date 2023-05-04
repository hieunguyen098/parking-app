import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchResultList from './components/SearchResultList';

import { GlobalStyles } from '../../constants';
import SearchInput from '../../components/SearchInput/SearchInput';

const SearchResults = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
                <SearchInput placeholder="Tìm kiếm nhà xe" />

                <Text style={styles.cancelText}>Hủy</Text>
            </View>
            <SearchResultList />
        </View>
    );
};

export default SearchResults;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1,
    },
    searchInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cancelText: {
        marginLeft: 16,
        fontSize: 16,
    },
});
