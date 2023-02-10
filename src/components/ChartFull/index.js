import React from 'react';
import { View, Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { darkPurple, green, lightPurple } from '../Colors';

const ChartFull = () => {
  const { width } = Dimensions.get('window');

  // width -= 40;

  const chartOffset = width * 0.25;
  const chartHeight = 153;

  return (
    <View style={{ marginVertical: 30 }}>
      <View style={{ marginLeft: -chartOffset }}>
        <LineChart
          data={{
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={width * 1.6} // from react-native
          height={chartHeight}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          withDots={false}
          withHorizontalLines={false}
          withVerticalLines={false}
          withShadow={false}
          chartConfig={{
            propsForHorizontalLabels: {
              disabled: true,
            },
            propsForVerticalLabels: {
              disabled: true,
            },
            propsForLabels: {},
            backgroundColor: darkPurple,
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: () => green,
            propsForDots: {
              r: '0',
              strokeWidth: '2',
              stroke: lightPurple,
            },
          }}
        />
      </View>
    </View>
  );
};

export default ChartFull;
