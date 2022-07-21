import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

export type RootStackParamList = {
  AuthNavigator: undefined;
  MainNavigator: undefined;
};
export type RootStackNavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList,
  T
>;

export type AuthNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type NavigationProps<T extends keyof AuthNavigatorParamList> = NativeStackNavigationProp<AuthNavigatorParamList, T>;

export type AuthStackNavigationProps<T extends keyof AuthNavigatorParamList> = CompositeNavigationProp<
  NavigationProps<T>,
  RootStackNavigationProps<'AuthNavigator'>
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const AppRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
