import React from 'react';

import { View } from 'react-native';
import Icons from '../../assets/icons';
import { darkPurple, lightPurple } from '../Colors';
import Text from '../Text';

const Ribbon = () => (
  <View
    style={{
      backgroundColor: lightPurple,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 4,
    }}
  >
    <View style={{ marginRight: 5 }}>
      <Icons.CoinIcon />
    </View>
    <View>
      <Text.Bold style={{ fontSize: 12, color: darkPurple }}>
        Earn Rewards
      </Text.Bold>
    </View>
  </View>
);

export default Ribbon;
