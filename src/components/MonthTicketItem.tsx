import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants/style';
import { useNavigation } from '@react-navigation/native';

const MonthTicketItem = ({ item }: any) => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.innerContainer}
                onPress={() => navigation.navigate('DetailMonthTicket')}
                android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: `${item.imageUrl}`,
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={[styles.duedate, styles.desc]}>Có giá trị đến hết ngày {item.duedate}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default MonthTicketItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: GlobalStyles.colors.lightGrey100,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
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
        marginBottom: 8,
    },
    descContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    desc: {
        fontSize: 12,
    },
    duedate: {
        marginRight: 8,
        color: GlobalStyles.colors.lightGrey,
        fontStyle: 'italic',
        textAlign: 'right',
    },
});
