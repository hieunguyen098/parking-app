import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import { VictoryChart, VictoryArea, VictoryTheme, VictoryLabel } from 'victory-native';
import { GlobalStyles } from '../../../constants/style';

const ParkingWorkingChart = ({ dataChart }: any) => {
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
                        interpolation="linear"
                        style={{ data: { fill: GlobalStyles.colors.primaryOrange } }}
                        // domain={{ x: [0, 24], y: [0, 100] }}
                        data={dataChart}
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

