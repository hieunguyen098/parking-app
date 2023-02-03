import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomButton from '../../../components/Buttons/BottomButton';
import { useNavigation } from '@react-navigation/native';

const CheckOut = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <BottomButton onPress={goBack} type="secondary" title="Quay lại" />
        </View>
    );
};

export default CheckOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
