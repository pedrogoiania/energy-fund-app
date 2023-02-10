import React from 'react';

import { View } from 'react-native';
import { darkPurple } from '../Colors';
import Text from '../Text';

const Banner = ({ title, subtitle, image }) => (
  <View
    style={{
      backgroundColor: darkPurple,
      padding: 20,
      flexDirection: 'row',
      minHeight: 105,
      borderRadius: 10,
    }}
  >
    <View style={{ flex: 1 }}>
      <Text.Light bold style={{ fontSize: 16, marginBottom: 10 }}>
        {title}
      </Text.Light>
      <Text.Light style={{ fontSize: 12 }}>
        {subtitle}
      </Text.Light>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
      {image && image}
    </View>
  </View>
);

export default Banner;
