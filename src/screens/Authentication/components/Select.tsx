import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const Select = ({ data }: any) => {
    const [selectedGender, setSelectedGender] = useState(null)
    return (
        <View style={styles.container}>
            <Picker
                style={styles.select}
                selectedValue={selectedGender}
                onValueChange={(itemValue: any, itemIndex: any) => setSelectedGender(itemValue)}
                dropdownIconColor="#9c9c9c"
                placeholder='Giới tính'
            >
                {data.map((item: any) => {
                    return <Picker.Item key={item.id} style={styles.item} label={item.label} value={item.value} />;
                })}
            </Picker>
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 12,
        backgroundColor: '#FBFBFB',
        borderRadius: 20,
        marginVertical: 10,
    },
    select: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 35,
    },
    item: {
        margin: 0,
    },
    icon: {
        width: 25,
        height: 25,
    },
});
