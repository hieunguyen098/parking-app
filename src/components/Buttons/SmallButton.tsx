import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

const SmallButton = ({ title, style, textStyle, onPress = () => {} }: any) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default SmallButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: GlobalStyles.colors.primaryOrange,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
