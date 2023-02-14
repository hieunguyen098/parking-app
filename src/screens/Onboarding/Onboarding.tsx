import { View, Text, FlatList, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import slides from '../../../slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import LargeButton from '../../components/Buttons/LargeButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
    const { width } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef<FlatList>(null);
    const navigation: any = useNavigation();

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            skipOnboarding();
        }
    };

    const skipOnboarding = async () => {
        try {
            await AsyncStorage.setItem('@viewedOnboarding', 'true');
            navigation.navigate('Authentication');
        } catch (err) {
            console.log('Error @setItem: ', err);
        }
    };

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                keyExtractor={(item) => item.id}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <Paginator data={slides} scrollX={scrollX} />
            <View style={[styles.buttons, { width }]}>
                <LargeButton style={styles.nextButton} onPress={scrollTo} title={'Tiếp tục'} type="primary" />
                <LargeButton onPress={skipOnboarding} title={'Bỏ qua'} type="secondary" />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttons: {
        paddingHorizontal: 24,
        marginBottom: 64,
    },
    nextButton: {
        marginBottom: 12,
    },
});

export default Onboarding;
