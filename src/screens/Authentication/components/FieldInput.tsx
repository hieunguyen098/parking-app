import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const FieldInput = ({ keyboardType, placeHolder, iconPosition, source = null }: any) => {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            {iconPosition === 'left' && <Image source={source} style={[styles.icon, {marginRight: 10}]} />}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={(text) => setValue(text)}
                keyboardType={keyboardType}
                placeholder={placeHolder}
            />
            {iconPosition === 'right' && <Image source={source} style={styles.icon} />}
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
});

export default FieldInput;
