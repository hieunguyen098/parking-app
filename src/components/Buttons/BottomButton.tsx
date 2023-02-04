import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LargeButton from './LargeButton';
import { GlobalStyles } from '../../constants/style';

const BottomButton = ({ onPress, title, type }: any) => {
    return (
        <>
            {type === 'secondary' ? (
                <View style={[styles.bottomButton, { backgroundColor: GlobalStyles.colors.primaryOrange }]}>
                    <LargeButton onPress={onPress} title={title} type="white" />
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
