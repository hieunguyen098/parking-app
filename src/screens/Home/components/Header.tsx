import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React, {useEffect} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import HeaderSearchInput from './HeaderSearchInput';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigation: any = useNavigation();
    const user = useSelector((state: any) => state.auth.user);

    return (
        <LinearGradient colors={['rgba(255,149,58,1)', 'rgba(255,149,58,0)']} style={styles.headerContainer}>
            <View style={styles.firstLineContainer}>
                <Text style={styles.name}>Chào, {user.fullName} !</Text>
                <View style={styles.rightHeaderContainer}>
                    <Pressable
                        style={styles.iconContainer}
                        onPress={() => {
                            navigation.navigate('Notifications');
                        }}
                    >
                        <Ionicons name="notifications-circle" size={38} color="rgba(0,0,0,0.3)" />
                        {/*<Text style={styles.badge}>3</Text>*/}
                    </Pressable>
                    <Image
                        source={{
                            uri: (`${user.imageUrl}` == null || `${user.imageUrl}` == "") ?
                                "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/avatar%2Fdefault-avatar.png?alt=media&token=621d5022-1f49-4428-98c3-80afca549ed9"
                                : `${user.imageUrl}`,
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
            <HeaderSearchInput />
        </LinearGradient>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 8,
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
        height: 180,
        borderRadius: 10,
    },
});
