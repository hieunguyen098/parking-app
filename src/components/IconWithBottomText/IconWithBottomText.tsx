import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/style';

const IconWithBottomText = ({ title, name, Icon, iconStyle, textStyle }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={name} style={[styles.icon, iconStyle]} />
            </View>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
    );
};
export default IconWithBottomText;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    icon: {
        color: GlobalStyles.colors.primaryOrange,
        fontSize: 32,
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: GlobalStyles.colors.primaryOrange,
    },
});
