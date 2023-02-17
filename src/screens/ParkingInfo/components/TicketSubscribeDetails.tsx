import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../../constants/style';
import FieldInput from '../../../components/FieldInput';
import BottomButton from '../../../components/Buttons/BottomButton';

const TicketSubscribeDetails = () => {
    const [number, setNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Giá vé : <Text style={styles.price}>200.000đ/tháng </Text>
            </Text>
            <Text style={styles.title}>Số tháng đăng ký:</Text>
            <FieldInput
                setValue={setNumber}
                onChange={setNumber}
                value={number}
                placeHolder="Nhập số tháng muốn đăng ký"
                keyboardType="numeric"
            />
            <View style={styles.dateWrapper}>
                <Text style={styles.title}>Thời hạn sử dụng:</Text>
                <Text style={styles.info}>
                    Từ ngày <Text style={styles.date}>01/01/2023</Text> đến hết ngày{' '}
                    <Text style={styles.date}>31/03/2023.</Text>
                </Text>
            </View>
        </View>
    );
};

export default TicketSubscribeDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 12,
    },
    price: {
        color: GlobalStyles.colors.primaryOrange,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dateWrapper: {
        marginTop: 12,
    },
    info: {
        fontSize: 16,
    },
    date: {
        fontWeight: '700',
    },
    buttonContainer: {},
});
