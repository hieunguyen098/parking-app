import { Animated, Text } from 'react-native';
import React, { useState } from 'react';

import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import styles, { ACTIVE_CELL_BG_COLOR, DEFAULT_CELL_BG_COLOR, NOT_EMPTY_CELL_BG_COLOR } from './styles';
import { onChange } from 'react-native-reanimated';

const { Value, Text: AnimatedText } = Animated;

interface PinCodeInput {
    length: number;
    value: string;
    setValue: any;
    warning?: {
        show: boolean;
        message: string;
    };
    onChange?: any;
}

const PinCodeInput = ({ length, value, setValue, warning }: PinCodeInput) => {
    const CELL_COUNT = length;
    const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
    const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

    // const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    //     value,
    //     setValue,
    // });

    const renderCell = ({ index, symbol, isFocused }: any) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                  })
                : animationsColor[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                  }),
        };

        return (
            <AnimatedText key={index} style={[styles.cell, animatedCellStyle]}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };

    return (
        <>
            <CodeField
                // ref={ref}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
            />
            {warning?.show && <Text style={styles.alert}>{warning?.message}</Text>}
        </>
    );
};

export default PinCodeInput;
