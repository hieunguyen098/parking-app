import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/style';

const AccountInfo = () => {
    return (
        <LinearGradient colors={['rgba(255,149,58,1)', 'rgba(255,149,58,0)']} style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={{
                        uri: 'https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg',
                    }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Cao Thanh Bình</Text>
                <View style={styles.phoneContainer}>
                    <Text style={styles.phone}>SĐT: 0378978978</Text>
                    <View style={styles.iconContainer}>
                        <Ionicons name="md-eye-outline" size={16} color="black" />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

export default AccountInfo;

const styles = StyleSheet.create({
    container: {},
    innerContainer: {
        alignItems: 'center',
        paddingTop: 8,
        marginBottom: 8,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        paddingVertical: 8,
        fontSize: 20,
        fontWeight: '600',
        color: GlobalStyles.colors.primaryBlack100,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    phone: {
        marginRight: 8,
        fontSize: 16,
    },
    iconContainer: {
        justifyContent: 'center',
    },
});
