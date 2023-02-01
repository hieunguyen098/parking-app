import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const DateInput = ({ keyboardType, placeHolder, iconPosition, source = null }: any) => {
    const [date, setDate] = useState(new Date());
    const [isChanged, setIsChanged] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setIsChanged(true);
    };
    const showMode = () => {
        DateTimePickerAndroid.open({
            value: date,
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
                value={isChanged ? date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() : ''}
                keyboardType={keyboardType}
                placeholder={placeHolder}
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
