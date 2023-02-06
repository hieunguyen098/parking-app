import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MenuItem = ({ title, Icon, onPress = () => {}, iconName, size = 24, color = 'black' }: any) => {
    return (
        <View style={styles.container}>
            <Icon name={iconName} size={size} color={color} />
            <Text style={[styles.title, { color: color }]}>{title}</Text>
        </View>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        marginLeft: 8,
        fontSize: 20,
        fontWeight: '400',
    },
});
