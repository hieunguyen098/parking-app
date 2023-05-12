import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import FriendItem from './FriendItem';
import { useQuery, useQueryClient } from 'react-query';
import {getListFriends, sendFriendRequest} from '../../../services/friends.api';
import { useFocusEffect } from '@react-navigation/native';

interface friendType {
  phone: string,
  avatar: string,
  fullName: string,
  isFriend: boolean
  friendRequested: boolean
}

interface dataType {
  title: string,
  data: friendType[];
}

const FriendList = ({searchKey}: any) => {

    const [ping, setPing] = useState('')
    const [DATA, setData] = useState<dataType[]>([
        {
            title: 'Kết quả tìm kiếm',
            data: [],
        },
        {
            title: 'Bạn bè',
            data: [],
        },
    ]);

    const queryClient = useQueryClient();
    const {
      data: friends,
      isLoading
    } = useQuery({
        queryKey: ['friends'],
        queryFn: () => {
            return getListFriends(searchKey);
        },
        onSuccess: (data) => {
            setData(() => {
              const users = data.data ? data.data : [];
              const notFriendUsers: friendType[] = []
              const friendUsers: friendType[]  = []
              users.forEach((user) => {
                if (user.isFriend) {
                  friendUsers.push(user)
                } else {
                  notFriendUsers.push(user)
                }
              })
                return [
                  {
                    title: 'Kết quả tìm kiếm',
                    data: notFriendUsers,
                  },
                  {
                    title: 'Bạn bè',
                    data: friendUsers,
                  },];
            });
        },
    });

    useFocusEffect(
        useCallback(() => {
            queryClient.fetchQuery('friends').then();
        }, [searchKey, ping]),
    );

    const handleFriendRequest = (phone: string) => {
      sendFriendRequest(phone).then(r => {
        if (r.returnCode == 1) {
          setPing(phone)
        } else {
          console.log("Lỗi khi gửi lời mời kết bạn")
        }
      });
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item) => item.phone}
                renderItem={({ item, section }) =>
                    <FriendItem item={item} section={section.title} handleFriendRequest={handleFriendRequest}/>}
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
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        borderStyle: "dashed"
    },
});
