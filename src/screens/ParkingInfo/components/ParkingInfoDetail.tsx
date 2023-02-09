import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/style';
const ParkingInfoDetail = () => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpanded}>
                <View style={styles.toggleContainer}>
                    <Text style={styles.toggleText}>Thông tin chi tiết</Text>
                    {!expanded && <AntDesign name="rightcircleo" size={20} color="black" />}
                    {expanded && <AntDesign name="downcircleo" size={20} color="black" />}
                </View>
            </TouchableOpacity>

            {expanded && (
                <View style={{ backgroundColor: '#FFFFFF', marginTop: 8, padding: 8 }}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </Text>
                </View>
            )}
        </View>
    );
};

export default ParkingInfoDetail;

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
