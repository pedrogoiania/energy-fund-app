import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import Icons from '../../assets/icons';
import {
  darkPurple, f4, green, lightPurple, white,
} from '../Colors';

import Text from '../Text';

const ChartCard = ({ onPress, title, item }) => {
  const width = 165;

  const chartWidth = 0.45 * width;
  const chartHeight = 0.57 * width;

  const cardClick = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={cardClick}>
      <View
        style={{
          width,
          maxHeight: 180,
          overflow: 'hidden',
          backgroundColor: white,
          padding: 12,
          borderRadius: 4,
          borderStyle: 'solid',
          borderColor: f4,
          borderWidth: 1,
        }}
      >
        <View style={{ marginBottom: 7 }}>
          <Icons.WindIcon />
        </View>
        <Text.Bold>{title}</Text.Bold>

        <View style={{ marginLeft: -chartWidth + 12 }}>
          <LineChart
            data={{
              //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
            width={width} // from react-native
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
            bezier
            style={{
              overflow: 'hidden',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <Text style={{ fontSize: 14 }}>$ 1,245.23</Text>
          <View
            style={{
              marginLeft: 5,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                transform: [{ rotate: '135deg' }],
                marginRight: 4,
                marginBottom: 2,
              }}
            >
              <Icons.ArrowLeftIcon width={10} height={10} fill={green} />
            </View>
            <Text style={{ fontSize: 14, color: green }}>31.28%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChartCard;
