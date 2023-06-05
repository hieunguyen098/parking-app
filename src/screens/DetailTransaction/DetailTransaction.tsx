import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
function DetailTransaction() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="store" size={24} color="green" />
                    </View>
                    <Text style={styles.headerSubTitle}>Thanh toán phí gửi xe</Text>
                    <Text style={styles.headerContent}>-12.000đ</Text>
                </View>
                <View style={styles.wrapperContent}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>Trạng thái</Text>
                        {/* Thành công */}
                        {/* <Text style={styles.successValue}>Thành công</Text> */}
                        {/* Thất bại */}
                        <Text style={styles.errorValue}>Thất bại</Text>
                    </View>
                    {/* Thất bại */}
                    <Text style={styles.errorMessage}>
                        Hệ thống giao dịch đang gặp gián đoạn. Mong bạn thông cảm và thử lại sau ít phút.
                    </Text>
                </View>
                <View style={styles.wrapperContent}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>Mã giao dịch</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.value}>230603-000466608</Text>
                            <Ionicons name="copy-outline" size={20} color="black" />
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>Thời gian</Text>
                        <Text style={styles.value}>10:50 - 03/06/2023</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>Nguồn tiền</Text>
                        <Text style={styles.value}>Momo</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>Phí giao dịch</Text>
                        <Text style={styles.value}>Miễn phí</Text>
                    </View>
                </View>
                <View style={styles.wrapperContent}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>Mã đơn hàng</Text>
                        <Text style={styles.value}>23062023_DVrf3AOfGhLIA4</Text>
                    </View>
                </View>
                <View style={styles.wrapperContent}>
                    <View style={styles.contentContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="support-agent" size={24} color="black" style={{ marginRight: 8 }} />
                            <Text style={styles.title}>Yêu cầu hỗ trợ</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        marginTop: 32,
    },
    header: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingBottom: 16,
        elevation: 2,
    },
    iconContainer: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: -24,
        left: '50%',
        transform: [{ translateX: -24 }],
        padding: 8,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 24,
    },
    headerSubTitle: {
        textAlign: 'center',
        marginTop: 28,
    },

    headerContent: {
        marginTop: 8,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    wrapperContent: {
        padding: 16,
        paddingBottom: 0,
        backgroundColor: '#fff',
        marginTop: 8,
        borderRadius: 4,
        elevation: 2,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    label: {
        fontSize: 16,
        color: '#a6a6a6',
    },
    successValue: {
        fontSize: 16,
        color: '#00b300',
        fontWeight: 'bold',
    },
    errorValue: {
        fontSize: 16,
        color: '#ff0000',
        fontWeight: 'bold',
    },
    errorMessage: {
        color: '#a6a6a6',
        marginBottom: 16,
    },
    value: {
        fontSize: 16,
    },
});

export default DetailTransaction;
