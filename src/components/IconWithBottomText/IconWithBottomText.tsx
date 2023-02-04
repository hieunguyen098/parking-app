import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

const IconWithBottomText = ({ title, name, Icon, onPress = () => {}, iconStyle, textStyle }: any) => {
    const handlePress = () => {
        onPress();
    };
    return (
        <Pressable
            style={styles.container}
            onPress={handlePress}
            android_ripple={{ color: GlobalStyles.colors.primaryOrange }}
        >
            <View style={styles.iconContainer}>
                <Icon name={name} style={[styles.icon, iconStyle]} />
            </View>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};
export default IconWithBottomText;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
    },
    icon: {
        color: GlobalStyles.colors.primaryOrange,
        fontSize: 24,
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: GlobalStyles.colors.primaryOrange,
    },
});
