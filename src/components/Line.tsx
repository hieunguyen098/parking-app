import React from 'react';
import { View } from 'react-native';

const Line = ({ borderStyle, type, color }: any) => {
    return (
        <View
            style={{
                borderRadius: 5,
                borderStyle: borderStyle,
                borderColor: color ? color : '#000',
                borderWidth: 1,
                width: type === 'vertical' ? 1 : '100%',
                height: type === 'vertical' ? '100%' : 1,
                marginVertical: 20,
            }}
        />
    );
};

export default Line;
