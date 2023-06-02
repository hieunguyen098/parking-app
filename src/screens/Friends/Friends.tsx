import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import FriendList from './components/FriendList';

const Friends = () => {
    const [searchKey, setSearchKey] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <SearchInput placeholder="Tìm kiếm người dùng" setSearchKey={setSearchKey}/>
                <FriendList searchKey={searchKey}/>
            </View>
        </SafeAreaView>
    );
};

export default Friends;

const styles = StyleSheet.create({
    container: { flex: 1 },
    innerContainer: {
        marginHorizontal: 16,
        flex: 1,
    },
});
