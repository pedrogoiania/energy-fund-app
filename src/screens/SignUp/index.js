/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { View } from 'react-native';
import Icons from '../../assets/icons';

import BaseView from '../../components/BaseView';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import StepsComponent from '../../components/StepsComponent';
import Text from '../../components/Text';

const BackButton = ({ onPress }) => (
  <IconButton onPress={onPress} iconComponent={<Icons.ArrowLeftIcon />} />
);
const RightButtonComponent = () => <StepsComponent />;

const SignUp = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <BaseView
      rightButtonComponent={<RightButtonComponent />}
      leftButtonComponent={<BackButton onPress={goBack} />}
    >
      <View>
        <View
          style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text.Title>Create your account</Text.Title>
        </View>

        <Input title="First Name" placeholder="Put your first name" />
        <Input title="Last Name" placeholder="Put your last name" />
        <Input
          title="E-mail"
          keyboardType="email-address"
          placeholder="Put your email"
        />
        <Input
          title="Password"
          secureTextEntry
          placeholder="Minimum 8 characters"
        />

        <View
          style={{
            marginVertical: 16,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icons.EmptyCheckboxIcon />
          </View>
          <Text numberOfLines={3}>
            {'I am over 18 years of age and I have read and agree to \nthe '}
            <Text.Bold>Terms of Service</Text.Bold>
            {' '}
            <Text>and </Text>
            <Text.Bold>Privacy policy</Text.Bold>
            <Text>.</Text>
          </Text>
        </View>

        <Button title="Create Account" onPress={goBack} />
        <Button.Outlined onPress={goBack}>
          <Text>
            Already have an account?
            {' '}
            <Text.Underline>Log in Here</Text.Underline>
          </Text>
        </Button.Outlined>
      </View>
    </BaseView>
  );
};

export default SignUp;
