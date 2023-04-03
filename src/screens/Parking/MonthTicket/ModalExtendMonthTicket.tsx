import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../../constants';
import SmallButton from '../../../components/Buttons/SmallButton';

const ModalExtendMonthTicket = ({ expandTicket, setExpandTicket }: any) => {
    const [monthValue, setMonthValue] = useState('1');
    const handleIncrement = () => {
        setMonthValue((Number(monthValue) + 1).toString());
    };

    const handleDecrement = () => {
        if (Number(monthValue) > 0) {
            setMonthValue((Number(monthValue) - 1).toString());
        }
    };

    const handleInputChange = (newValue: any) => {
        // Accept only numeric values
        if (/^\d*$/.test(newValue)) {
            setMonthValue(Number(newValue).toString());
        }
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={expandTicket}
            onRequestClose={() => {
                setExpandTicket(false);
            }}
        >
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => setExpandTicket(false)}
            >
                <TouchableOpacity
                    style={{
                        width: '90%',
                        marginLeft: 12,
                        marginRight: 12,
                        paddingHorizontal: 8,
                        paddingVertical: 12,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 16,
                    }}
                    activeOpacity={1}
                    onPress={(event) => event.stopPropagation()}
                >
                    <Text style={{ textAlign: 'center', fontSize: 24 }}>Gia hạn vé tháng</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderColor: GlobalStyles.colors.lightGrey100,
                            paddingBottom: 8,
                            marginTop: 12,
                        }}
                    >
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: `https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG`,
                                }}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.content}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: GlobalStyles.colors.lightBlack }}>
                                {'Nhà xe trường đại học Bách Khoa TP. HCM'}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ marginRight: 12 }}>Số tháng</Text>
                                <View
                                    style={{
                                        width: '50%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        borderColor: '#ccc',
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={handleDecrement}
                                        style={{
                                            paddingHorizontal: 20,
                                            backgroundColor: GlobalStyles.colors.lightGrey,
                                            paddingVertical: 12,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: 8,
                                            textAlign: 'center',
                                        }}
                                        keyboardType="numeric"
                                        value={monthValue}
                                        onChangeText={handleInputChange}
                                    />
                                    <TouchableOpacity
                                        onPress={handleIncrement}
                                        style={{
                                            paddingHorizontal: 20,
                                            backgroundColor: GlobalStyles.colors.lightGrey,
                                            paddingVertical: 12,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
                        <SmallButton
                            title="Quay lại"
                            style={{ backgroundColor: 'white', marginHorizontal: 12, paddingVertical: 12 }}
                            textStyle={{ color: GlobalStyles.colors.primaryOrange }}
                            onPress={() => {
                                setExpandTicket(false);
                            }}
                        />
                        <SmallButton title="Xác nhận" style={{ paddingVertical: 12 }} onPress={() => {}} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalExtendMonthTicket;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    boxContent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
    },
    top: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colors.lightGrey100,
        paddingBottom: 10,
    },
    imageContainer: {
        marginRight: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
});
