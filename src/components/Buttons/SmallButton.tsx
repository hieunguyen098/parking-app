import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants';
import {useNavigation} from "@react-navigation/native";

const SmallButton = ({ title, style, api, textStyle, onPress = () => {} }: any) => {
    const onSend = () => {
        console.log("send friend request " + api)
        fetch(api).then(res => {
        })
        onPress();
    }
    return (
        <Pressable style={[styles.button, style]} onPress={api ? onSend : onPress} android_ripple={{ color: 'white' }}>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
