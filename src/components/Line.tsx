import React from 'react';
import { View } from 'react-native';

const Line = ({ type, color }: any) => {
    return (
        <View
            style={{
                borderRadius: 5,
                borderStyle: type,
                borderColor: color ? color : '#000',
                borderWidth: 1,
                width: '100%',
                height: 1,
                marginVertical: 20,
            }}
        />
    );
};

export default Line;
