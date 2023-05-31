import { Image, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { GlobalStyles } from '../../../constants';
import SmallButton from '../../../components/Buttons/SmallButton';
import { AntDesign } from '@expo/vector-icons';

const FriendItem = ({ item, section, handleFriendRequest }: any) => {
    const [requested, setRequested] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: `${item.imageUrl}` == '' ?
                        "https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/avatar%2Fdefault-avatar.png?alt=media&token=621d5022-1f49-4428-98c3-80afca549ed9"
                        : `${item.imageUrl}`,
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{item.fullName}</Text>
            </View>
            {section === 'Bạn bè' ? (
                <AntDesign
                    name="doubleright"
                    size={12}
                    color={GlobalStyles.colors.primaryOrange}
                    style={styles.seeMoreIcon}
                />
            ) : (
                <SmallButton title={requested ? "Đã gửi lời mời" : "Kết bạn"}
                             style={requested ? {backgroundColor: "gray"} : {}}
                             onPress={requested ? () => {}
                                 : () => {
                                 handleFriendRequest(item.userId);
                                 setRequested(true);
                                 } }/>
            )}
        </View>
    );
};

export default FriendItem;

const styles = StyleSheet.create({
    container: {
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
});
