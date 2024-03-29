import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import React, {useState} from 'react';
import { GlobalStyles } from '../../constants';

const SearchInput = ({ placeholder, style, onSearch, setSearchKey = (key: any) => {} }: any) => {
    const handleSearch = () => {
        onSearch();
    };

    const [value, setValue] = useState('')

    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color={GlobalStyles.colors.primaryOrange} onPress={handleSearch} />
            <TextInput
                style={[styles.inputSearch, style]}
                placeholder={placeholder}
                placeholderTextColor={GlobalStyles.colors.primaryOrange}
                blurOnSubmit={true}
                defaultValue={''}
                onChangeText={
                    (text) => {
                        setSearchKey(text)
                        setValue(text)
                    }
                }
                onSubmitEditing={
                    (e) => {
                        console.log(e.nativeEvent.text)
                        handleSearch()
                    }
                }
                onBlur={
                    () => {
                        setValue('')
                    }
                }
                value={value}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    searchContainer: {
        width: '100%',
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
