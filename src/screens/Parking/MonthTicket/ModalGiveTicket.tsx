import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../../constants';
import SmallButton from '../../../components/Buttons/SmallButton';
import SearchInput from '../../../components/SearchInput/SearchInput';
import { AntDesign } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const ModalGiveTicket = ({ giveTicket, setGiveTicket }: any) => {
    const [selectedItem, setSelectedItem] = useState();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={giveTicket}
            onRequestClose={() => {
                setGiveTicket(false);
            }}
        >
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => setGiveTicket(false)}
            >
                <TouchableOpacity
                    style={{
                        width: '90%',
                        marginLeft: 12,
                        marginRight: 12,
                        paddingHorizontal: 8,
                        paddingVertical: 12,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 16,
                    }}
                    activeOpacity={1}
                    onPress={(event) => event.stopPropagation()}
                >
                    <Text style={{ textAlign: 'center', fontSize: 24 }}>Tặng vé tháng</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingBottom: 8,
                            marginTop: 12,
                        }}
                    >
                        <View style={styles.container}>
                            <SearchInput placeholder="Tìm kiếm người dùng" onSearch={() => {}} />

                            <FlatList
                                data={result.data}
                                renderItem={({ item, index }) => {
                                    return <FriendItem item={item} />;
                                }}
                                keyExtractor={(item) => item.id}
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
                                setGiveTicket(false);
                            }}
                        />
                        <SmallButton title="Xác nhận" style={{ paddingVertical: 12 }} onPress={() => {}} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalGiveTicket;

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

const result = {
    data: [
        {
            id: '0',
            name: 'Cao Thanh Bình',
        },
        {
            id: '1',
            name: 'Đặng Hoài Bão',
        },
        // {
        //     id: '2',
        //     name: 'Cao Thanh Bình'
        // },
        // {
        //     id: '3',
        //     name: 'Đặng Hoài Bão',
        // },
        // {
        //     id: '4',
        //     name: 'Cao Thanh Bình'
        // },
        // {
        //     id: '5',
        //     name: 'Đặng Hoài Bão',
        // },
        // {
        //     id: '6',
        //     name: 'Cao Thanh Bình'
        // },
        // {
        //     id: '7',
        //     name: 'Đặng Hoài Bão',
        // },
    ],
};

const FriendItem = ({ item }: any) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: `${item.avatar}`,
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            {true ? (
                <AntDesign
                    name="doubleright"
                    size={12}
                    color={GlobalStyles.colors.primaryOrange}
                    style={styles.seeMoreIcon}
                />
            ) : (
                <SmallButton title="Kết bạn" />
            )}
        </View>
    );
};
