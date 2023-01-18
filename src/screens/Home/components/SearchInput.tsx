import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import React from 'react';

const SearchInput = () => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="orange" />
            <TextInput
                style={styles.inputSearch}
                placeholder="Tìm kiếm bãi đỗ xe"
                cursorColor="orange"
                placeholderTextColor={'orange'}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 44,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        elevation: 2,
    },
    inputSearch: {
        flex: 1,
        fontSize: 20,
        marginLeft: 10,
        color: 'orange',
    },
});
