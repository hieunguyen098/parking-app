import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/style';
import { useQuery, useQueryClient } from 'react-query';
import { getUser } from '../../../utils/user.api';
import { useFocusEffect } from '@react-navigation/native';

const AccountInfo = () => {
    const [isMasked, setIsMasked] = useState<boolean>(true);
    const queryClient = useQueryClient();
    const {
        data: userInfo,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => {
            return getUser();
        },
        retry: false,
        select: (data) => data.data,
    });
    useFocusEffect(
        React.useCallback(() => {
            queryClient.invalidateQueries('userInfo');
        }, []),
    );

    const handleMaskPhoneNumber = () => {
        setIsMasked((prev) => !prev);
    };

    return (
        <LinearGradient colors={['rgba(255,149,58,1)', 'rgba(255,149,58,0)']} style={styles.container}>
            {isLoading && <ActivityIndicator size="large" />}
            {!isLoading && userInfo && <View style={styles.innerContainer}>
                <Image
                    source={{
                        uri: 'https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg',
                    }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{userInfo.name}</Text>
                <View style={styles.phoneContainer}>
                    {isMasked === false ? (
                        <Text style={styles.phone}>SĐT: **********</Text>
                    ) : (
                        <Text style={styles.phone}>SĐT: {userInfo.phone}</Text>
                    )}
                    <Pressable style={styles.iconContainer} onPress={handleMaskPhoneNumber}>
                        <Ionicons name="md-eye-outline" size={24} color="black" />
                    </Pressable>
                </View>
            </View>}
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
        width: 112,
        marginRight: 16,
        fontSize: 16,
    },
    iconContainer: {
        justifyContent: 'center',
    },
});
