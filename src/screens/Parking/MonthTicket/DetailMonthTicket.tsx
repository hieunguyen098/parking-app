import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import FieldValue from '../../../components/FieldValue';
import { GlobalStyles } from '../../../constants';
import SmallButton from '../../../components/Buttons/SmallButton';
import ModalExtendMonthTicket from './ModalExtendMonthTicket';
import ModalGiveTicket from './ModalGiveTicket';
import moment from "moment";

const DetailMonthTicket = ({route} : any) => {
    const { item } = route.params;
    const [extendNumber, setExtendNumber] = useState(0);
    const [expandTicket, setExpandTicket] = useState(false);
    const [giveTicket, setGiveTicket] = useState(false);

    const handleGiveTicket = () => {
        setGiveTicket(true);
    };

    const handleExpandTicket = () => {
        setExpandTicket(true);
        console.log('Expand ticket');
    };

    const convertDueDate = (numOfMonth: string, startDate: string) => {
        if (!isNaN(parseInt(numOfMonth))) {
            return moment(startDate).add(parseInt(numOfMonth), "month").format("DD/MM/YYYY");
        } else {
            return "NaN"
        }
    }

    return (
        <>
            <ModalExtendMonthTicket item = {item} expandTicket={expandTicket} setExpandTicket={setExpandTicket} extendNumber={extendNumber} setExtendNumber={setExtendNumber}/>
            <ModalGiveTicket item={item} giveTicket={giveTicket} setGiveTicket={setGiveTicket} />
            <View style={styles.container}>
                <View style={styles.boxContent}>
                    <View style={styles.top}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: item.locationImageUrl ? item.locationImageUrl : "",
                                }}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>{item.locationName}</Text>
                            <SmallButton
                                title={'Tặng'}
                                style={{ width: 80, marginLeft: 'auto' }}
                                onPress={handleGiveTicket}
                            />
                        </View>
                    </View>
                    <FieldValue fieldName="Số tháng đã mua" value={parseInt(item.number) + extendNumber} />
                    <FieldValue fieldName="Địa chỉ" value={item.locationAddress} />
                    <FieldValue fieldName="Ngày mua" value={moment(item.startDate).format("DD/MM/YYYY")} />
                    <FieldValue fieldName="Có giá trị đến hết ngày" value={convertDueDate(item.number, item.startDate)} />
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
