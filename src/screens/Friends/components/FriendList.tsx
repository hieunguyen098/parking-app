import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import FriendItem from './FriendItem';
import { useQuery, useQueryClient } from 'react-query';
import { getListFriends } from '../../../utils/friends.api';
import { useFocusEffect } from '@react-navigation/native';

const FriendList = () => {
    const result = {
        title: 'Kết quả tìm kiếm',
        data: [
            {
                id: '1',
                name: 'Thanh Bình',
                isFriend: false,
            },
            {
                id: '2',
                name: 'Thanh Bình',
                isFriend: false,
            },
        ],
    };
    const [DATA, setData] = useState([
        {
            title: 'Kết quả tìm kiếm',
            data: [
                {
                    id: '1',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '2',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '3',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '4',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '5',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '6',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '7',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
                {
                    id: '8',
                    name: 'Thanh Bình',
                    isFriend: false,
                },
            ],
        },
        {
            title: 'Bạn bè',
            data: [
                {
                    id: '3',
                    name: 'Nguyễn Xuân Hiếu',
                    isFriend: true,
                },
                {
                    id: '4',
                    name: 'Đặng Hoài Bão',
                    isFriend: true,
                },
                {
                    id: '5',
                    name: 'Nguyễn Xuân Hiếu',
                    isFriend: true,
                },
                {
                    id: '6',
                    name: 'Đặng Hoài Bão',
                    isFriend: true,
                },
                {
                    id: '7',
                    name: 'Nguyễn Xuân Hiếu',
                    isFriend: true,
                },
                {
                    id: '8',
                    name: 'Đặng Hoài Bão',
                    isFriend: true,
                },
                {
                    id: '9',
                    name: 'Nguyễn Xuân Hiếu',
                    isFriend: true,
                },
                {
                    id: '10',
                    name: 'Đặng Hoài Bão',
                    isFriend: true,
                },
            ],
        },
    ]);

    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ['friends'],
        queryFn: () => {
            return getListFriends();
        },
        onSuccess: (data) => {
            setData((prev) => {
                return [prev[0], { title: 'Bạn bè', data: data.friends }];
            });
        },
    });

    useFocusEffect(
        useCallback(() => {
            queryClient.invalidateQueries('friends');
        }, []),
    );

    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item, section }) => <FriendItem item={item} section={section.title} />}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
            ></SectionList>
        </View>
    );
};

export default FriendList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
});
