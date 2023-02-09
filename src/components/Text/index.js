import React from 'react';
import { Text as RNText } from 'react-native';

import styles from './styles';

const Text = ({ children, style }) => (
  <RNText style={[style, styles.text]}>{children}</RNText>
);

const Title = ({ children, style }) => (
  <Text style={{ fontSize: 18, fontWeight: '600', ...style }}>{children}</Text>
);

const Underline = ({ children, style }) => (
  <Text style={{ textDecorationLine: 'underline', ...style }}>{children}</Text>
);

Text.Title = Title;
Text.Underline = Underline;

export default Text;
