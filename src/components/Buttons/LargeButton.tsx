import { StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants';

const LargeButton = ({ title, style, textStyle, type, onPress = () => {} }: any) => {
    return (
        <Pressable
            style={[
                styles.button,
                type === 'secondary'
                    ? { backgroundColor: GlobalStyles.colors.secondaryOrange }
                    : { backgroundColor: GlobalStyles.colors.primaryOrange },
                style,
            ]}
            onPress={onPress}
            android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
        >
            <Text
                style={[
                    styles.text,
                    type === 'secondary' ? { color: GlobalStyles.colors.primaryOrange } : { color: '#fff' },
                    textStyle,
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
