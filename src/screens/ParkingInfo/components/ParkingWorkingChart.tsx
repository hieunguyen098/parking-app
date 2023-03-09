import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import { VictoryChart, VictoryArea, VictoryTheme, VictoryLabel } from 'victory-native';
import { GlobalStyles } from '../../../constants/style';

const ParkingWorkingChart = () => {
    const [selectedValue, setSelectedValue] = useState(0);

    return (
        <View>
            <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Option 1" value={0} />
                <Picker.Item label="Option 2" value={1} />
                <Picker.Item label="Option 3" value={2} />
            </Picker>
            <View style={styles.container}>
                <VictoryChart width={400} theme={VictoryTheme.material}>
                    <VictoryLabel x={25} y={30} text={'%'} />
                    <VictoryArea
                        animate={{
                            duration: 500,
                            onLoad: { duration: 500 },
                        }}
                        interpolation="stepBefore"
                        style={{ data: { fill: GlobalStyles.colors.primaryOrange } }}
                        domain={{ x: [6, 18], y: [0, 100] }}
                        data={[
                            { x: 6, y: 60 },
                            { x: 7, y: 80 },
                            { x: 8, y: 77 },
                            { x: 9, y: 60 },
                            { x: 10, y: 92 },
                            { x: 11, y: 88 },
                            { x: 12, y: 50 },
                            { x: 13, y: 40 },
                            { x: 14, y: 60 },
                            { x: 15, y: 50 },
                            { x: 16, y: 55 },
                            { x: 17, y: 60 },
                            { x: 18, y: 40 },
                        ]}
                    />
                </VictoryChart>
            </View>
        </View>
    );
};

export default ParkingWorkingChart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chart: {
        flex: 1,
    },
});
