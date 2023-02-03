import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../constants/style';
import { LinearGradient } from 'expo-linear-gradient';
import LargeButton from '../../../components/Buttons/LargeButton';
import { useNavigation } from '@react-navigation/native';
import BottomButton from '../../../components/Buttons/BottomButton';
import FieldValue from '../../../components/FieldValue';

const VehicleDetail = () => {
    const navigation: any = useNavigation();
    const checkOut = () => {
        navigation.navigate('CheckOut');
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Thời gian đã gửi</Text>
                <View style={styles.scarfShape}>
                    <LinearGradient
                        style={styles.rounded}
                        colors={[GlobalStyles.colors.primaryOrange, GlobalStyles.colors.primaryOrange50]}
                    >
                        <View style={[styles.elementOne, styles.rounded]} />
                    </LinearGradient>
                    <View style={[styles.elementTwo, styles.rounded]} />
                    <Text style={styles.timer}>02 : 59 : 57</Text>
                </View>
                <View style={styles.detailParking}>
                    <FieldValue fieldName="Bãi đỗ xe" value="Trường đại học Bách Khoa TP. HCM" />
                    <FieldValue fieldName="Địa chỉ" value="Dĩ An, Bình Dương" />
                    <FieldValue fieldName="Biển số" value="60 - B6 75901" />
                    <FieldValue fieldName="Thời gian vào" value="12:00 27/11/2022" />
                </View>
            </View>
            <BottomButton onPress={checkOut} title="Lấy xe" />
        </View>
    );
};

export default VehicleDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
    },
    scarfShape: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    elementOne: {
        width: 280,
        height: 280,
        zIndex: 1,
    },
    elementTwo: {
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 2,
    },
    rounded: {
        borderRadius: 1000,
    },
    timer: {
        position: 'absolute',
        zIndex: 2,
        fontSize: 40,
        fontWeight: '600',
        color: GlobalStyles.colors.lightBlack,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 20,
        color: GlobalStyles.colors.lightBlack,
    },
    detailParking: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: GlobalStyles.colors.lightGrey100,
        backgroundColor: '#fff',
        marginTop: 20,
    },
});
