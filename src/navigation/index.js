import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import strings from '../strings';

import { black, darkPurple, white } from '../components/Colors';
import AuthContext from '../contexts/AuthContext';

import Home from '../screens/Home';
import Trade from '../screens/Trade';

import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Icons from '../assets/icons';

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

const getIcon = (routeName, selected = false) => {
  const icons = {
    Home: selected ? <Icons.HomeSelectedIcon /> : <Icons.HomeIcon />,
    Trade: selected ? <Icons.ArrowSelectedIcon /> : <Icons.ArrowsIcon />,
  };

  return icons[routeName] || <Icons.HomeIcon />;
};

const WithAuthStack = () => (
  <TabStack.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => (
        // You can return any component that you like here!
        <View>{getIcon(route.name, focused)}</View>
      ),
      tabBarActiveTintColor: darkPurple,
      tabBarInactiveTintColor: black,
    })}
  >
    <TabStack.Screen
      name="Home"
      component={Home}
      options={{ ...withAuthStackOptions }}
    />
    <TabStack.Screen
      name="Trade"
      component={Trade}
      options={{ ...withAuthStackOptions }}
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
