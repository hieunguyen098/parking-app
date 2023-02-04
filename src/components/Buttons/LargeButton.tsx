import { StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

const LargeButton = ({ title, style, type, onPress = () => {} }: any) => {
    return (
        <Pressable
            style={[
                styles.button,
                type === 'secondary'
                    ? { backgroundColor: GlobalStyles.colors.secondaryOrange }
                    : type === 'white'
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: GlobalStyles.colors.primaryOrange },
                style,
            ]}
            onPress={onPress}
            android_ripple={{ color: type === 'white' ? GlobalStyles.colors.primaryOrange50 : 'white' }}
        >
            <Text
                style={[
                    styles.text,
                    type === 'secondary'
                        ? { color: GlobalStyles.colors.primaryOrange }
                        : type === 'white'
                        ? { color: GlobalStyles.colors.primaryOrange }
                        : { color: '#fff' },
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
