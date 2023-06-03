import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { onAlert } from '../../utils/ui';
import PaymentMethodItem from './components/PaymentMethodItem';
import { ACCEPTED_METHOD, PaymentMethod } from '../../constants/Payment';
import { GlobalStyles } from '../../constants';

const ManagePayment = () => {
    const [linkedPayments, setLinkedPayments] = useState<any[]>([]);
    const onDelete = (deletedItem: any) => {
        setLinkedPayments(linkedPayments.filter((item) => item.key != deletedItem.key));
        // call delete payment method api here
        // requestBody: {id: id}
    };
    const onAccept = (AddedItem: any) => {
        setLinkedPayments([...linkedPayments, AddedItem]);
        // call add payment method api here
        // requestBody: {
        //     id: 1,
        //     name: 'VNPay',
        //     key: PaymentMethod.VNPAY (string)
        // }
    };
    const unlinkedPayments = useMemo(() => {
        return ACCEPTED_METHOD.filter((item) => {
            for (var i = 0; i < linkedPayments.length; i++) {
                if (linkedPayments[i].key === item.key) {
                    return false;
                }
            }
            return true;
        });
    }, [linkedPayments]);
    useEffect(() => {
        // get list linked payment method here
        setLinkedPayments([ACCEPTED_METHOD[0]]);
    }, []);

    return (
        <View style={styles.container}>
            {linkedPayments.length > 0 && <Text style={styles.title}>Hình thức thanh toán khả dụng</Text>}
            {linkedPayments.map((item) => {
                return (
                    <PaymentMethodItem
                        key={item.id}
                        onDelete={() => onAlert('Xóa liên kết', 'Bạn có chắc chắn muốn xóa?', () => onDelete(item))}
                        name={item.name}
                        source={
                            item.key === PaymentMethod.ZALOPAY
                                ? require('../../../assets/images/zalopay-logo.png')
                                : item.key === PaymentMethod.MOMO
                                ? require('../../../assets/images/momo-logo.png')
                                : require('../../../assets/images/vnpay-logo.png')
                        }
                    />
                );
            })}
            {unlinkedPayments.length > 0 && <Text style={styles.title}>Thêm hình thức thanh toán</Text>}
            <View style={styles.listMethod}>
                {unlinkedPayments.map((item) => {
                    return (
                        <PaymentMethodItem
                            onPress={() =>
                                onAlert('Liên kết ví', `Bạn có chắc muốn liên kết ví ${item.name}?`, () =>
                                    onAccept(item),
                                )
                            }
                            name={item.name}
                            disabled={true}
                            source={
                                item.key === PaymentMethod.ZALOPAY
                                    ? require('../../../assets/images/zalopay-logo-disabled.png')
                                    : item.key === PaymentMethod.MOMO
                                    ? require('../../../assets/images/momo-logo-disabled.png')
                                    : require('../../../assets/images/vnpay-logo-disabled.png')
                            }
                        />
                    );
                })}
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
    empty: {
        backgroundColor: GlobalStyles.colors.veryLightGrey,
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
});
