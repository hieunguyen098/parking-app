import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

interface DateInput {
    keyboardType?: any;
    placeHolder?: string;
    iconPosition?: string;
    source?: any;
    value: any;
    setValue: Function;
}

const DateInput = ({ keyboardType, placeHolder, iconPosition, source, value, setValue }: DateInput) => {
    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate: Date | undefined = selectedDate;
        if (!currentDate) return;
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();
        const dateString = `${day}/${month}/${year}`;
        setValue(dateString);
    };
    const showMode = () => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange,
            mode: 'date',
            is24Hour: true,
        });
    };

    return (
        <View style={styles.container}>
            {iconPosition === 'left' && <Image source={source} style={[styles.icon, { marginRight: 10 }]} />}
            <TextInput
                onPressIn={showMode}
                style={styles.input}
                value={value}
                keyboardType={keyboardType}
                placeholder={placeHolder}
                showSoftInputOnFocus={false}
            />
            {iconPosition === 'right' && <Image source={source} style={styles.icon} />}
        </View>
    );
};

export default DateInput;

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
