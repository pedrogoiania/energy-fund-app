import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { black } from '../Colors';

import Text from '../Text';

import styles from './styles';

const Button = ({
  onPress, title, children, containerStyle, textStyle,
}) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <View style={[styles.buttonContainer, { ...containerStyle }]}>
      <Text style={[styles.buttonText, { ...textStyle }]}>
        {children || title}
      </Text>
    </View>
  </TouchableOpacity>
);

const Outlined = (props) => (
  <Button
    {...props}
    containerStyle={{ backgroundColor: 'transparent' }}
    textStyle={{ color: black }}
  />
);

Button.Outlined = Outlined;
export default Button;
