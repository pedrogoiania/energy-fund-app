import React from 'react';

import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from '../../assets/icons';
import { darkPurple, gray, lightPurple } from '../Colors';
import Text from '../Text';

const Ribbon = ({
  showIcon, title, selected, onPress,
}) => {
  const click = () => {
    onPress(title);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress && click}>
      <View
        style={{
          backgroundColor: selected ? lightPurple : 'transparent',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          borderRadius: 4,
        }}
      >
        {showIcon && (
          <View style={{ marginRight: 5 }}>
            <Icons.CoinIcon />
          </View>
        )}
        <View>
          <Text.Bold style={{ fontSize: 12, color: selected ? darkPurple : gray }}>
            {title}
          </Text.Bold>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Ribbon;
