import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../constants';

interface FieldInput {
    keyboardType?: any;
    placeHolder?: string;
    iconPosition?: string;
    source?: any;
    value: any;
    setValue: Function;
    autoFocus?: boolean;
    warning?: {
        show: boolean;
        message: string;
    };
    onChange?: any;
    maxLength?: number;
}

const FieldInput = ({
    keyboardType,
    placeHolder,
    iconPosition,
    source,
    value,
    setValue,
    autoFocus,
    warning,
    onChange,
    maxLength,
}: FieldInput) => {
    return (
        <View>
            <View style={[styles.container, warning?.show && { borderColor: GlobalStyles.colors.lightRed }]}>
                {iconPosition === 'left' && <Image source={source} style={[styles.icon, { marginRight: 10 }]} />}
                <TextInput
                    onChange={onChange}
                    autoFocus={autoFocus}
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    keyboardType={keyboardType}
                    placeholder={placeHolder}
                    maxLength={maxLength}
                />
                {iconPosition === 'right' && <Image source={source} style={styles.icon} />}
            </View>
            {warning?.show && <Text style={styles.alert}>{warning?.message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FBFBFB',
        borderRadius: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    icon: {
        width: 25,
        height: 25,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 20,
    },
    alert: {
        color: GlobalStyles.colors.lightRed,
        marginBottom: 10,
    },
});

export default FieldInput;
