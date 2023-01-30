import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../../constants/style';
import SearchInput from '../../../components/SearchInput/SearchInput';

const HeaderSearchInput = () => {
    const navigation: any = useNavigation();
    const handleSearch = () => {
        navigation.navigate('SearchResults');
    };

    return <SearchInput placeholder="Tìm kiếm bãi đỗ" onSearch={handleSearch} />;
};

export default HeaderSearchInput;

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
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
    },
});
