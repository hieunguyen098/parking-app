import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SmallButton from '../../../components/Buttons/SmallButton';
import { GlobalStyles } from '../../../constants/style';

const ItemVehicle = ({ text }: any) => {
    return (
        <View>
            <Pressable style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={require('../../../../assets/images/motorbikeIcon.png')} style={styles.icon} />
                    <Text style={styles.plateNumber}>{text}</Text>
                    <SmallButton title="Lấy xe" />
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
        elevation: 4,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {},
    plateNumber: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
        marginLeft: 12,
        color: GlobalStyles.colors.lightBlack,
    },
});
