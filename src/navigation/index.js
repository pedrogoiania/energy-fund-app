import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import strings from '../strings';

import { darkPurple, white } from '../components/Colors';
import AuthContext from '../contexts/AuthContext';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Text from '../components/Text';

const Stack = createNativeStackNavigator();

const TabStack = createBottomTabNavigator();

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
  <TabStack.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => (
        // You can return any component that you like here!
        <View>
          <Text>{route.name}</Text>
        </View>
      ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <TabStack.Screen
      name="Home"
      component={Home}
      options={{ title: 'strings.home', ...withAuthStackOptions }}
    />
  </TabStack.Navigator>
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
