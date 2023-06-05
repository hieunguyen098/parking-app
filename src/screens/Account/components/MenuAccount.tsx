import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MenuItem from './MenuItem';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { onAlert } from '../../../utils/ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../../store/slices/authSlice';
const MenuAccount = () => {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const onSignOut = async () => {
        try {
            dispatch(authActions.reset());
            navigation.navigate('Discover');
        } catch (e) {
            // remove error
        }
        console.log('Signed out');
    };
    return (
        <View style={styles.container}>
            <MenuItem
                onPress={() => navigation.navigate('EditProfile')}
                title="Sửa thông tin cá nhân"
                Icon={AntDesign}
                iconName="user"
                color="black"
            />
            <MenuItem
                onPress={() => navigation.navigate('ManagePayment')}
                title="Thanh toán"
                Icon={AntDesign}
                iconName="creditcard"
                color="black"
            />

            <MenuItem
                onPress={() => navigation.navigate('Settings')}
                title="Cài đặt"
                Icon={Feather}
                iconName="settings"
                color="black"
            />
            <MenuItem
                onPress={() => navigation.navigate('DetailTransaction')}
                title="Chi tiết giao dịch "
                Icon={Feather}
                iconName="log-out"
                color="red"
            />
            <MenuItem
                onPress={() => onAlert('Đăng xuất', 'Đăng xuất tài khoản?', onSignOut)}
                title="Đăng xuất"
                Icon={Feather}
                iconName="log-out"
                color="red"
            />
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
