import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SmallButton from '../../../components/Buttons/SmallButton';
import { GlobalStyles } from '../../../constants/style';
import { useNavigation } from '@react-navigation/native';

const ItemVehicle = ({ text, id }: any) => {
    const navigation: any = useNavigation();
    const viewDetail = () => {
        navigation.navigate('VehicleDetail', { id: id });
    };
    const checkOut = () => {
        navigation.navigate('CheckOut');
    };
    return (
        <View>
            <Pressable onPress={viewDetail} style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={require('../../../../assets/images/motorbikeIcon.png')} style={styles.icon} />
                    <Text style={styles.plateNumber}>{text}</Text>
                    <SmallButton onPress={checkOut} title="Lấy xe" />
                </View>
            </Pressable>
        </View>
    );
};

export default ItemVehicle;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: GlobalStyles.colors.lightOrange,
        marginBottom: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 149, 58, 0.25)',
        elevation: 2,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 41,
        height: 22,
    },
    plateNumber: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
        marginLeft: 12,
        color: GlobalStyles.colors.lightBlack,
    },
});
