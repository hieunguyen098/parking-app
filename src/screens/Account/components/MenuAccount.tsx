import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MenuItem from './MenuItem';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const MenuAccount = () => {
    return (
        <View style={styles.container}>
            <MenuItem title="Sửa thông tin cá nhân" Icon={AntDesign} iconName="user" color="black" />
            <MenuItem title="Thanh toán" Icon={AntDesign} iconName="creditcard" color="black" />

            <MenuItem title="Cài đặt" Icon={Feather} iconName="settings" color="black" />

            <MenuItem title="Đăng xuất" Icon={Feather} iconName="log-out" color="red" />
        </View>
    );
};

export default MenuAccount;

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        paddingHorizontal: 16,
    },
});
