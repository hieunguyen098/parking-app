import { StyleSheet, Pressable, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

const LargeButton = ({ title, style, type, onPress = () => {} }: any) => {
    return (
        <Pressable
            style={[
                styles.button,
                type === 'primary'
                    ? { backgroundColor: GlobalStyles.colors.primaryOrange }
                    : { backgroundColor: GlobalStyles.colors.secondaryOrange },
                style
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.text,
                    type === 'primary' ? { color: '#fff' } : { color: GlobalStyles.colors.primaryOrange },
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
};

export default LargeButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: GlobalStyles.colors.primaryOrange,
        paddingHorizontal: 12,
        paddingVertical: 18,
        borderRadius: 8,
        width: '100%',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
});
