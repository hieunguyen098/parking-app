import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import PaymentMethod from './components/PaymentMethod';
import { onAlert } from '../../utils/ui';

const ManagePayment = () => {
    const onDelete = () => {
        console.log('deleted');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hình thức thanh toán khả dụng</Text>
            <PaymentMethod
                onDelete={() => onAlert('Xóa liên kết', 'Bạn có chắc chắn muốn xóa?', onDelete)}
                name={'MoMo'}
                source={require('../../../assets/images/momo-logo.png')}
            />
            <Text style={styles.title}>Thêm hình thức thanh toán</Text>
            <View style={styles.listMethod}>
                <PaymentMethod
                    disabled={true}
                    name={'MoMo'}
                    source={require('../../../assets/images/momo-logo-disabled.png')}
                />
                <PaymentMethod
                    disabled={true}
                    name={'ZaloPay'}
                    source={require('../../../assets/images/zalopay-logo-disabled.png')}
                />
            </View>
        </View>
    );
};

export default ManagePayment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 14,
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    listMethod: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
