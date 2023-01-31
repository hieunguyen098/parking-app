import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconWithBottomText from '../../../components/IconWithBottomText/IconWithBottomText';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const menu = [
    {
        title: 'Bãi đỗ xe',
        name: 'place',
        Icon: MaterialIcons,
    },
    {
        title: 'Vé tháng',
        name: 'ticket',
        Icon: Fontisto,
    },
    {
        title: 'Bạn bè',
        name: 'users',
        Icon: FontAwesome,
    },
    {
        title: 'Thanh toán',
        name: 'payment',
        Icon: MaterialIcons,
    },
];

const MenuBar = () => {
    return (
        <View style={styles.container}>
            {menu.map((menuItem) => {
                return <IconWithBottomText {...menuItem} key={menuItem.title} />;
            })}
        </View>
    );
};

export default MenuBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32,
        zIndex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 4,
    },
});
