import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../../../components/Title/Title';
import ItemVehicle from '../../Home/components/ItemVehicle';

const ListVehicle = () => {
    return (
        <View>
            <View style={styles.listVehicle}>
                <ItemVehicle text="60 - B6 75901" />
                <ItemVehicle text="60 - B6 75901" />
            </View>
        </View>
    );
};

export default ListVehicle;

const styles = StyleSheet.create({
    listVehicle: {},
});
