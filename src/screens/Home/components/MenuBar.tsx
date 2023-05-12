import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconWithBottomText from '../../../components/IconWithBottomText/IconWithBottomText';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const menu = [
    {
        title: 'Bãi đỗ xe',
        name: 'place',
        Icon: MaterialIcons,
        linkTo: 'Parking',
        option: {
            screen: 'ParkingLot'
        }
    },
    {
        title: 'Vé tháng',
        name: 'ticket',
        Icon: Fontisto,
        linkTo: 'Parking',
        option: {
            screen: 'MonthTicket'
        }
    },
    {
        title: 'Bạn bè',
        name: 'users',
        Icon: FontAwesome,
        linkTo: 'Friends',
        option: {},
    },
    {
        title: 'Thanh toán',
        name: 'payment',
        Icon: MaterialIcons,
        linkTo: 'ManagePayment',
        option: {}
    },
];

const MenuBar = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            {menu.map((menuItem) => {
                return (
                    <IconWithBottomText
                        title={menuItem.title}
                        name={menuItem.name}
                        Icon={menuItem.Icon}
                        onPress={() => {
                            navigation.navigate(menuItem.linkTo, menuItem.option);
                        }}
                        key={menuItem.title}
                    />
                );
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
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
});
