import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

const SmallButton = ({ title, style, textStyle, onPress = () => {} }: any) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress} android_ripple={{ color: 'white' }}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default SmallButton;

const styles = StyleSheet.create({
    button: {
        minWidth: 40,
        backgroundColor: GlobalStyles.colors.primaryOrange,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
