import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../constants/style';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const PaymentMethod = ({ source, disabled, name, onPress, onDelete }: any) => {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
            style={[styles.container, disabled && { width: '49%' }]}
        >
            <View style={styles.brand}>
                <Image style={styles.logo} source={source} />
                <Text style={[styles.brandName, disabled && { color: GlobalStyles.colors.lightGrey }]}>{name}</Text>
            </View>
            {!disabled && <MaterialIcons onPress={onDelete} name="delete" size={24} color={GlobalStyles.colors.red} />}
        </Pressable>
    );
};

export default PaymentMethod;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.veryLightGrey,
        padding: 20,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    brand: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandName: {
        fontSize: 16,
    },
});
