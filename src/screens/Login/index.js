/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { View } from 'react-native';

import BaseView from '../../components/BaseView';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';

const Login = () => (
  <BaseView>
    <View>
      <View
        style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text.Title>Login</Text.Title>
      </View>

      <Input title="E-mail" placeholder="Put your password" />
      <Input
        title="Password"
        secureTextEntry
        placeholder="Minimum 8 characters"
      />

      <Button title="Login" />
      <Button.Outlined>
        <Text>
          Don't have an account?
          {' '}
          <Text.Underline>Sign up</Text.Underline>
          {' '}
          here
        </Text>
      </Button.Outlined>
    </View>
  </BaseView>
);

export default Login;
