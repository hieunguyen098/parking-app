import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../constants/style';

const MenuItem = ({ title, Icon, onPress = () => {}, iconName, size = 24, color = 'black' }: any) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
            android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
        >
            <Icon name={iconName} size={size} color={color} />
            <Text style={[styles.title, { color: color }]}>{title}</Text>
        </Pressable>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: '400',
    },
});
