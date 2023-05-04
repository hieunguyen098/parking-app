import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants';
import Line from './Line';

const CouponUsing = () => {
    return (
        <View style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.title}>Giảm 100%</Text>
                <Text style={styles.duedate}>HSD: 10/12/2023</Text>
            </View>
            <Line type="vertical" borderStyle="dashed" color={GlobalStyles.colors.lightGrey} />
            <Pressable android_ripple={{ color: '#d3d3d3' }}>
                <Text style={styles.useButton}>Dùng</Text>
            </Pressable>
        </View>
    );
};

export default CouponUsing;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        width: 180,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 10,
    },
    useButton: {
        fontSize: 14,
        color: GlobalStyles.colors.primaryOrange,
        fontWeight: '500',
        padding: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    duedate: {
        fontSize: 13,
    },
    detail: {
        paddingLeft: 10,
    },
});
