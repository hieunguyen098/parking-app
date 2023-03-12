import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import FieldValue from '../../../components/FieldValue';
import Line from '../../../components/Line';
import { GlobalStyles } from '../../../constants/style';
import SmallButton from '../../../components/Buttons/SmallButton';

const DetailMonthTicket = () => {
    const expandTicket = () => {
        console.log('Expand ticket');
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.boxContent}>
                    <View style={styles.top}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: `https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG`,
                                }}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>{'Nhà xe trường đại học Bách Khoa TP. HCM'}</Text>
                            <SmallButton title={'Tặng'} style={{ width: 80, marginLeft: 'auto' }} />
                        </View>
                    </View>
                    <FieldValue fieldName="Địa chỉ" value="Dĩ An, Bình Dương" />
                    <FieldValue fieldName="Ngày mua" value="01/09/2022" />
                    <FieldValue fieldName="Có giá trị đến hết ngày" value="30/11/2022" />
                </View>
            </View>
            <BottomButton title="Gia hạn" onPress={expandTicket} />
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
