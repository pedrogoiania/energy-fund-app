import React from 'react';
import { Text as RNText } from 'react-native';
import { white } from '../Colors';

import styles from './styles';

const Text = ({ children, style, numberOfLines }) => (
  <RNText numberOfLines={numberOfLines} style={[style, styles.text]}>
    {children}
  </RNText>
);

const Title = ({ children, style }) => (
  <Text style={{ fontSize: 18, fontWeight: '600', ...style }}>{children}</Text>
);

const Underline = ({ children, style }) => (
  <Text style={{ textDecorationLine: 'underline', ...style }}>{children}</Text>
);

const Bold = ({ children, style }) => (
  <Text style={{ fontWeight: '800', ...style }}>
    {children}
  </Text>
);

const Light = ({ children, style, bold }) => (
  <Text style={{ color: white, fontWeight: bold ? '800' : '400', ...style }}>
    {children}
  </Text>
);

Text.Title = Title;
Text.Underline = Underline;
Text.Bold = Bold;
Text.Light = Light;

export default Text;
