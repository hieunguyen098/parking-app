import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, processColor, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { VictoryBar, VictoryChart, VictoryArea, VictoryTheme, VictoryLabel } from 'victory-native';
import { GlobalStyles } from '../../../constants/style';

const data = {
    labels: ['0', '3', '6', '9', '12', '15', '18', '21', '24'],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43, 20, 45, 28],
        },
    ],
};
const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `orange`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 0, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
};
const ParkingWorkingChart = () => {
    const [selectedValue, setSelectedValue] = useState(0);

    return (
        <View>
            {/* <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Option 1" value={0} />
                <Picker.Item label="Option 2" value={1} />
                <Picker.Item label="Option 3" value={2} />
            </Picker> */}
            {/* <BarChart
                data={data}
                width={Dimensions.get('window').width - 64} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={chartConfig}
                withInnerLines={false}
                fromZero={true}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            /> */}
            <View style={styles.container}>
                <VictoryChart width={400} theme={VictoryTheme.material}>
                    <VictoryLabel x={25} y={30} text={'Người'} />
                    <VictoryArea
                        animate={{
                            duration: 500,
                            onLoad: { duration: 500 },
                        }}
                        interpolation="stepBefore"
                        style={{ data: { fill: GlobalStyles.colors.primaryOrange } }}
                        data={[
                            { x: 0, y: 2, y0: 0 },
                            { x: 1, y: 4 },
                            { x: 2, y: 15 },
                            { x: 3, y: 4 },
                            { x: 4, y: 6 },
                            { x: 5, y: 2 },
                            { x: 6, y: 3 },
                            { x: 7, y: 8 },
                            { x: 8, y: 4 },
                            { x: 9, y: 60 },
                            { x: 10, y: 2 },
                            { x: 11, y: 3 },
                            { x: 12, y: 5 },
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
        backgroundColor: '#f5fcff',
    },
    chart: {
        flex: 1,
    },
});
