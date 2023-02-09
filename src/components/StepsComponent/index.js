import React from 'react';

import { View } from 'react-native';
import { f4 } from '../Colors';

const StepsComponent = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    }}
  >
    {[1, 2, 3].map((item) => (
      <View
        key={String(item)}
        style={{
          borderRadius: 200,
          width: 50,
          height: 5,
          backgroundColor: f4,
          marginHorizontal: 5,
        }}
      />
    ))}
  </View>
);

export default StepsComponent;
