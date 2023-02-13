import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/style';
import ParkingWorkingChart from './ParkingWorkingChart';
function ParkingWorking() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpanded}>
                <View style={styles.toggleContainer}>
                    <Text style={styles.toggleText}>Biểu đồ hoạt động theo giờ</Text>
                    {!expanded && <AntDesign name="rightcircleo" size={20} color="black" />}
                    {expanded && <AntDesign name="downcircleo" size={20} color="black" />}
                </View>
            </TouchableOpacity>

            {expanded && (
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 8 }}>
                    <ParkingWorkingChart />
                </View>
            )}
        </View>
    );
}

export default ParkingWorking;
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.lightGrey100,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleText: {
        flex: 1,
        fontSize: 20,
        fontWeight: '500',
    },
});
