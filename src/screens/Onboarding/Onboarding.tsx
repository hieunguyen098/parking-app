import { View, Text, FlatList, StyleSheet, Animated } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import slides from '../../../slides';
import OnboardingItem from './OnboardingItem';

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                keyExtractor={(item) => item.id}
                pagingEnabled
                horizontal
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onboarding;
