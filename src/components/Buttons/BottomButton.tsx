import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LargeButton from './LargeButton';
import { GlobalStyles } from '../../constants/style';

interface BottomButton {
    onPress: any;
    title: string;
    type?: string;
    style?: any;
}

const BottomButton = ({ onPress, title, type, style }: BottomButton) => {
    return (
        <>
            {type === 'secondary' ? (
                <View style={[styles.bottomButton, { backgroundColor: GlobalStyles.colors.primaryOrange }]}>
                    <LargeButton
                        onPress={onPress}
                        title={title}
                        style={{ backgroundColor: '#fff' }}
                        textStyle={{ color: GlobalStyles.colors.primaryOrange }}
                    />
                </View>
            ) : (
                <View style={styles.bottomButton}>
                    <LargeButton onPress={onPress} title={title} />
                </View>
            )}
        </>
    );
};

export default BottomButton;

const styles = StyleSheet.create({
    bottomButton: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 1,
        width: '100%',
        padding: 20,
        position: 'absolute',
        bottom: 0,
    },
});
