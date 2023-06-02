import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import FriendItem from './FriendItem';
import { useQuery, useQueryClient } from 'react-query';
import {getListFriends, getUnknownUser, sendFriendRequest} from '../../../services/friends.api';
import { useFocusEffect } from '@react-navigation/native';
import {useSelector} from "react-redux";

interface friendType {
  userId: string,
  phone: string,
  imageUrl: string,
  fullName: string,
}

interface dataType {
  title: string,
  data: friendType[];
}

const FriendList = ({searchKey}: any) => {
    const user = useSelector((state: any) => state.auth.user);
    const [ping, setPing] = useState('')

    const [unknownUserData, setUnknownUserData]
        = useState<dataType[]>(
        [{
          title: 'Kết quả tìm kiếm',
          data: [],
        }]
    )
    const [friendsData, setFriendData]
        = useState<dataType[]>(
        [{
          title: 'Bạn bè',
          data: [],
        }]
    )

    const queryClient = useQueryClient();
    const {
      data: friends,
    } = useQuery({
        queryKey: ['friends'],
        queryFn: () => {
            return getListFriends(user.phone, searchKey);
        },
        onSuccess: (data) => {
            setFriendData(() => {
              const users = data.data ? data.data : [];
              const friendUsers: friendType[]  = []
              users.forEach((user) => {
                  friendUsers.push(user)
              })
                return [{
                    title: 'Bạn bè',
                    data: friendUsers,
                  }];
            });
        },
    });

  const {
    data,
  } = useQuery({
    queryKey: ['unknownUser'],
    queryFn: () => {
      return getUnknownUser(user.phone, searchKey);
    },
    onSuccess: (data) => {
      setUnknownUserData(() => {
        const users = data.data ? data.data : [];
        const unknownUsers: friendType[]  = []
        users.forEach((user) => {
          unknownUsers.push(user)
        })
        return [{
          title: 'Kết quả tìm kiếm',
          data: unknownUsers,
        }];
      });
    },
  });

    useFocusEffect(
        useCallback(() => {
            queryClient.fetchQuery('friends').then();
            queryClient.fetchQuery('unknownUser').then();
        }, [searchKey, ping]),
    );

    const handleFriendRequest = (userId: string) => {
      sendFriendRequest(user.phone, userId).then(r => {
        if (r.returnCode == 1) {
          setPing(userId)
        } else {
          console.log("Lỗi khi gửi lời mời kết bạn")
        }
      });
    }

    return (
        <View style={styles.container}>
            {unknownUserData && unknownUserData[0].data
                && unknownUserData[0].data.length > 0 &&
                <SectionList
                sections={unknownUserData}
                keyExtractor={(item) => item.phone}
                renderItem={({ item, section }) =>
                    <FriendItem item={item} section={section.title} handleFriendRequest={handleFriendRequest}/>}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
            ></SectionList>}
            {friendsData && friendsData[0].data
                && friendsData[0].data.length > 0 &&
                <SectionList
                    sections={friendsData}
                    keyExtractor={(item) => item.phone}
                    renderItem={({ item, section }) =>
                        <FriendItem item={item} section={section.title} handleFriendRequest={handleFriendRequest}/>}
                    renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
                ></SectionList>}
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
