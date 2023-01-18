import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchInput from './SearchInput';

const Header = () => {
    return (
        <LinearGradient colors={['rgba(255,149,58,1)', 'rgba(255,149,58,0)']} style={styles.headerContainer}>
            <View style={styles.firstLineContainer}>
                <Text style={styles.name}>Chào Cao Thanh Bình !</Text>
                <View style={styles.rightHeaderContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="notifications-circle" size={38} color="rgba(0,0,0,0.3)" />
                        <Text style={styles.badge}>3</Text>
                    </View>
                    <Image
                        source={{
                            uri: 'https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg',
                        }}
                        style={styles.avatar}
                    />
                </View>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: 'https://cdn.vectorstock.com/i/1000x1000/75/78/parking-conceptual-web-banner-car-park-vector-12827578.webp',
                    }}
                    style={styles.banner}
                />
            </View>
            <SearchInput />
        </LinearGradient>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        paddingBottom: 32,
        paddingHorizontal: 16,
    },
    name: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    rightHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'relative',
        marginRight: 8,
    },
    badge: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        paddingHorizontal: 5,
        borderRadius: 50,
        color: 'white',
        fontSize: 12,
    },
    firstLineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    bannerContainer: {
        marginVertical: 10,
    },
    banner: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
});
