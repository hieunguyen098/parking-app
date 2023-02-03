import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FieldValue = ({fieldName, value}: any) => {
    return (
        <View style={styles.field}>
            <Text style={styles.fieldName}>{fieldName}</Text>
            <Text style={styles.fieldValue}>{value}</Text>
        </View>
    );
};

export default FieldValue;

const styles = StyleSheet.create({
    field: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
        justifyContent: 'space-between',
    },
    fieldName: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 16,
        width: '30%',
    },
    fieldValue: {
        fontSize: 16,
        width: '70%',
        textAlign: 'right',
    },
});
