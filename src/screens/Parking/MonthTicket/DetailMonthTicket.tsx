import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import FieldValue from '../../../components/FieldValue';
import Line from '../../../components/Line';
import { GlobalStyles } from '../../../constants';
import SmallButton from '../../../components/Buttons/SmallButton';
import ModalExtendMonthTicket from './ModalExtendMonthTicket';
import ModalGiveTicket from './ModalGiveTicket';

const DetailMonthTicket = () => {
    const [expandTicket, setExpandTicket] = useState(false);
    const [giveTicket, setGiveTicket] = useState(false);

    const handleGiveTicket = () => {
        setGiveTicket(true);
    };

    const handleExpandTicket = () => {
        setExpandTicket(true);
        console.log('Expand ticket');
    };
    return (
        <>
            <ModalExtendMonthTicket expandTicket={expandTicket} setExpandTicket={setExpandTicket} />
            <ModalGiveTicket giveTicket={giveTicket} setGiveTicket={setGiveTicket} />
            <View style={styles.container}>
                <View style={styles.boxContent}>
                    <View style={styles.top}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: `https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Ftrung-tam-thuong-m-i.jpg?alt=media&token=8190218c-a3ce-4066-bbc5-205e0843302e`,
                                }}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>{'Trung tâm thuong mại GigaMall'}</Text>
                            <SmallButton
                                title={'Tặng'}
                                style={{ width: 80, marginLeft: 'auto' }}
                                onPress={handleGiveTicket}
                            />
                        </View>
                    </View>
                    <FieldValue fieldName="Địa chỉ" value="Dĩ An, Bình Dương" />
                    <FieldValue fieldName="Ngày mua" value="01/09/2023" />
                    <FieldValue fieldName="Có giá trị đến hết ngày" value="31/12/2023" />
                </View>
            </View>
            <BottomButton title="Gia hạn" onPress={handleExpandTicket} />
        </>
    );
};

export default DetailMonthTicket;

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
