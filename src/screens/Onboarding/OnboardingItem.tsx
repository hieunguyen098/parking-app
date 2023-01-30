import { View, Text, useWindowDimensions, StyleSheet, Image, StatusBar } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

type ItemProps = {
    id: string;
    title: string;
    image: any;
    description: string;
};

const OnboardingItem = ({ item }: { item: ItemProps }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <View style={[styles.image, { width }]}>
                <Image style={{ width, resizeMode: 'contain' }} source={item.image} />
            </View>
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: GlobalStyles.colors.primaryOrange,
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: GlobalStyles.colors.secondary,
        textAlign: 'center',
        paddingHorizontal: 64,
    },
});

export default OnboardingItem;
