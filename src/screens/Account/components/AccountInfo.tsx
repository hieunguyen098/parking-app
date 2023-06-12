import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants';
import { useQuery, useQueryClient } from 'react-query';
import { getUser } from '../../../services/user.api';
import { useFocusEffect } from '@react-navigation/native';
import {useSelector} from "react-redux";

const AccountInfo = () => {
    const [isMasked, setIsMasked] = useState<boolean>(true);
    const queryClient = useQueryClient();
    const user = useSelector((state: any) => state.auth.user);
    const {
        data: userInfo,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => {
            return getUser(user.phone);
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
            {!isLoading && userInfo && (
                <View style={styles.innerContainer}>
                    <Image
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/avatar%2Favatar.jpeg?alt=media&token=3607beec-a976-4f4a-8281-914df282be47&_gl=1*gapg9j*_ga*ODAyODIyNzUuMTY4MzE3ODk2Mw..*_ga_CW55HF8NVT*MTY4NTQ1Mzk5OC43LjEuMTY4NTQ1NDAyOC4wLjAuMA..',
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{userInfo[0].name}</Text>
                    <View style={styles.phoneContainer}>
                        {isMasked === false ? (
                            <Text style={styles.phone}>SĐT: **********</Text>
                        ) : (
                            <Text style={styles.phone}>SĐT: {userInfo[0].phone}</Text>
                        )}
                        <Pressable style={styles.iconContainer} onPress={handleMaskPhoneNumber}>
                            <Ionicons name="md-eye-outline" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
            )}
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
        width: 135,
        marginRight: 10,
        fontSize: 16,
    },
    iconContainer: {
        justifyContent: 'center',
    },
});
