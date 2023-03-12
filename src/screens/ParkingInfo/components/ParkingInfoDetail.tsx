import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

interface IProps {
    description: string
}

const ParkingInfoDetail = ({ description }: IProps) => {

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Text>
                {description}
            </Text>
        </View>
    );
};

export default ParkingInfoDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 8,
    },
});
