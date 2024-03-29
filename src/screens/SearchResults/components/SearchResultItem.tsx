import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants';

const SearchResultItem = ({ item }: any) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.innerContainer} onPress={() => console.log('press')}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: (`${item.imageUrl}` == null || `${item.imageUrl}` == '') ? '' : `${item.imageUrl}`,
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.descContainer}>
                        <MaterialIcons name="place" size={16} style={styles.icon} />
                        <Text style={[styles.desc1, styles.desc]}>{item.distance}</Text>
                        <Text style={[styles.desc2, styles.desc]}>{item.place}</Text>
                    </View>
                </View>
                <Entypo name="direction" size={28} color={GlobalStyles.colors.primaryOrange} />
            </Pressable>
        </View>
    );
};

export default SearchResultItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        overflow: 'hidden',
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 8,
        paddingVertical: 8,

        alignItems: 'center',
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
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    descContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    desc: {
        fontSize: 12,
    },
    desc1: { marginRight: 8, color: GlobalStyles.colors.primaryOrange },
    desc2: { color: GlobalStyles.colors.lightGrey },
    icon: {
        color: GlobalStyles.colors.primaryOrange,
    },
});
