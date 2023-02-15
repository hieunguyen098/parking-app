import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AccountInfo from './components/AccountInfo';
import MenuAccount from './components/MenuAccount';

const Account = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AccountInfo />
            <MenuAccount />
        </SafeAreaView>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
