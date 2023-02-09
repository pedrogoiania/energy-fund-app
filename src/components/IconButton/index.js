import React from 'react';

import { TouchableOpacity } from 'react-native';

const IconButton = ({ iconComponent, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    {iconComponent && iconComponent}
  </TouchableOpacity>
);

export default IconButton;
