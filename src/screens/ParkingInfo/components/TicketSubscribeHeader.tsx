import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SmallButton from '../../../components/Buttons/SmallButton';
import { GlobalStyles } from '../../../constants/style';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const TicketSubscribeHeader = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>Bãi xe Hoài Bão</Text>
                    <Text style={styles.subText}>Đường số 8, Linh Trung, Thủ Đức</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <MaterialIcons name="place" size={16} color={GlobalStyles.colors.primaryOrange} />
                    <Text style={styles.infoText}>500m</Text>
                </View>
                <View style={styles.info}>
                    <Ionicons name="time-sharp" size={16} color={GlobalStyles.colors.primaryOrange} />
                    <Text style={styles.infoText}>8 AM - 10 PM</Text>
                </View>
            </View>
        </>
    );
};

export default TicketSubscribeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    leftContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 8,
    },
    subText: {
        fontSize: 16,
        fontWeight: '300',
    },
    button1: {
        height: 36,
        borderRadius: 18,
    },
    info: {
        backgroundColor: '#FFFFFF',
        borderColor: GlobalStyles.colors.primaryOrange,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        marginRight: 8,
    },
    infoContainer: {
        flexDirection: 'row',
    },
    infoText: {
        color: GlobalStyles.colors.primaryOrange,
    },
});
