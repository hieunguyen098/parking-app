import {
    Alert,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, {useCallback, useState} from 'react';
import { GlobalStyles } from '../../../constants';
import SmallButton from '../../../components/Buttons/SmallButton';
import SearchInput from '../../../components/SearchInput/SearchInput';
import { AntDesign } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {useSelector} from "react-redux";
import {useQuery, useQueryClient} from "react-query";
import {getListFriends} from "../../../services/friends.api";
import {giftMonthCard} from "../../../services/month-card.api";
import {useFocusEffect} from "@react-navigation/native";
import {assignParking} from "../../../services/vehicle.api";

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

const ModalTransferCheckout = ({ item, isOpen, setIsOpen }: any) => {
    const [selectedItem, setSelectedItem] = useState("");

    const [searchKey, setSearchKey] = useState("")
    const user = useSelector((state: any) => state.auth.user);
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
        queryKey: ['promote-friends'],
        queryFn: () => {
            return getListFriends(user.phone, '');
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

    const handleSelectFriend = (userId: string) => {
        setSelectedItem(userId);
    }

    const submitAssignParking = () => {
        if (selectedItem != null && selectedItem != "") {
            assignParking(item.vehicleId, selectedItem).then(
                res => {
                    if (res.returnCode == 1) {
                        Alert.alert("", "Uỷ quyền lấy xe thành công")
                    } else {
                        Alert.alert("", "Uỷ quyền lấy xe thất bại")
                    }
                    setIsOpen(false);
                }
            )
        } else {
            Alert.alert("", "Chưa chọn người nhận")
        }
    }

    useFocusEffect(
        useCallback(() => {
            queryClient.fetchQuery('promote-friends').then();
        }, [searchKey]),
    );


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => {
                setIsOpen(false);
            }}
        >
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => setIsOpen(false)}
            >
                <TouchableOpacity
                    style={{
                        width: '90%',
                        marginLeft: 20,
                        marginRight: 20,
                        paddingHorizontal: 8,
                        paddingVertical: 20,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 16,
                    }}
                    activeOpacity={1}
                    onPress={(event) => event.stopPropagation()}
                >
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Chuyển nhượng quyền lấy xe</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingBottom: 8,
                            marginTop: 12,
                        }}
                    >
                        <View style={styles.container}>
                            <SearchInput placeholder="Tìm kiếm người dùng" setSearchKey={searchKey} />

                            <FlatList
                                data={friendsData[0].data}
                                renderItem={({ item, index }) => {
                                    return <FriendItem item={item} selected={selectedItem} onSelected={handleSelectFriend}/>;
                                }}
                                keyExtractor={(item) => item.userId}
                                style={styles.itemFriend}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
                        <SmallButton
                            title="Quay lại"
                            style={{ backgroundColor: 'white', marginHorizontal: 12, paddingVertical: 12 }}
                            textStyle={{ color: GlobalStyles.colors.primaryOrange }}
                            onPress={() => {
                                setIsOpen(false);
                            }}
                        />
                        <SmallButton title="Xác nhận" style={{ paddingVertical: 12 }} onPress={submitAssignParking} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalTransferCheckout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    boxContent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
    },
    top: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colors.lightGrey100,
        paddingBottom: 10,
    },
    imageContainer: {
        marginRight: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: GlobalStyles.colors.veryLightGrey,
        padding: 8,
        marginHorizontal: 1,
        marginBottom: 12,
        elevation: 4,
        borderRadius: 12,
    },
    avatarContainer: {
        width: 40,
        marginRight: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    contentContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        color: GlobalStyles.colors.secondary,
    },
    seeMoreIcon: {},
    itemFriend: { marginBottom: 8, maxHeight: 300 },
});

const FriendItem = ({ item, selected, onSelected }: any) => {
    const [color, setColor] = useState( (selected != item.userId) ? "white" : '#e7dbbb');

    return (
        <View style={[styles.itemContainer, { backgroundColor: color }]}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: `${item.imageUrl}`,
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{item.fullName}</Text>
            </View>
            {(
                <AntDesign
                    onPress={() => {
                        onSelected(item.userId)
                    }}
                    name="doubleright"
                    size={12}
                    color={GlobalStyles.colors.primaryOrange}
                    style={styles.seeMoreIcon}
                />
            )}
        </View>
    );
};
