import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import strings from '../strings';

import { darkPurple, white } from '../components/Colors';
import AuthContext from '../contexts/AuthContext';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';

const Stack = createStackNavigator();

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: darkPurple,
  },
  headerTintColor: white,
  headerShown: false,
};
const withAuthStackOptions = {
  headerStyle: {
    backgroundColor: darkPurple,
  },
  headerTintColor: white,
  headerShown: false,
};

const WithAuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: strings.home, ...withAuthStackOptions }}
    />
  </Stack.Navigator>
);

const DefaulStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ title: strings.home, ...defaultStackOptions }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ title: strings.home, ...defaultStackOptions }}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  const useAuthContext = useContext(AuthContext);

  const { isAuth } = useAuthContext;

  return (
    <NavigationContainer>
      {isAuth ? <WithAuthStack /> : <DefaulStack />}
    </NavigationContainer>
  );
};

export default Navigation;
