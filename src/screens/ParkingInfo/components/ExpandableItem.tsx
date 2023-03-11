import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { GlobalStyles } from '../../../constants';

interface ExpandableItem {
    children: any;
    title: string;
}

const ExpandableItem = ({ children, title }: ExpandableItem) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpanded}>
                <View style={styles.toggleContainer}>
                    <Text style={styles.toggleText}>{title}</Text>
                    {!expanded && <AntDesign name="rightcircleo" size={20} color="black" />}
                    {expanded && <AntDesign name="downcircleo" size={20} color="black" />}
                </View>
            </TouchableOpacity>

            {expanded && children}
        </View>
    );
};

export default ExpandableItem;

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
