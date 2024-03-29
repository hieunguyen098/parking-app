import { Animated, Text } from 'react-native';
import React, { useState } from 'react';

import { CodeField } from 'react-native-confirmation-code-field';

import styles, { ACTIVE_CELL_BG_COLOR, DEFAULT_CELL_BG_COLOR, NOT_EMPTY_CELL_BG_COLOR } from './styles';
import { GlobalStyles } from '../../constants';

const { Value, Text: AnimatedText } = Animated;

interface PasswordInput {
    length: number;
    value: string;
    setValue: any;
    warning?: {
        show: boolean;
        message: string;
    };
    onChange?: any;
}

const PasswordInput = ({ length, value, setValue, warning, onChange }: PasswordInput) => {
    const CELL_COUNT = length;
    const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
    const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
    const [target, setTarget] = useState(false);

    const onTarget = (value: boolean) => {
        setTarget(value);
    };
    const renderCell = ({ index, symbol }: any) => {
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
        return <AnimatedText key={index} style={[styles.cell, animatedCellStyle]} />;
    };

    return (
        <>
            <CodeField
                onPressIn={() => onTarget(true)}
                onBlur={() => onTarget(false)}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={[
                    styles.codeFiledRoot,
                    target && styles.codeFiledRootTargeted,
                    warning?.show && { borderColor: GlobalStyles.colors.lightRed },
                ]}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
                onChange={onChange}
            />
            {warning?.show && <Text style={styles.alert}>{warning?.message}</Text>}
        </>
    );
};

export default PasswordInput;
