import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentType } from 'react';
import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  AuthNavigator: undefined;
  MainNavigator: undefined;
};

export type AuthNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
  SignUpCompleted: undefined;
  PWResetCompleted: undefined;
  PWResetEmailVerify: undefined;
  PWResetMain: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  InventoryStatus: undefined;
  RepairHistory: undefined;
  MyPage: undefined;
};

export type MainNavigatorParamList = {
  MainTab: undefined;
  ModifyUserInfo: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList,
  T
>;

type AuthNavigationProps<T extends keyof AuthNavigatorParamList> = NativeStackNavigationProp<AuthNavigatorParamList, T>;

export type AuthStackNavigationProps<T extends keyof AuthNavigatorParamList> = CompositeNavigationProp<
  AuthNavigationProps<T>,
  RootStackNavigationProps<'AuthNavigator'>
>;

type MainNavigationProps<T extends keyof MainNavigatorParamList> = NativeStackNavigationProp<MainNavigatorParamList, T>;

export type MainStackNavigationProps<T extends keyof MainNavigatorParamList> = CompositeNavigationProp<
  MainNavigationProps<T>,
  RootStackNavigationProps<'MainNavigator'>
>;

type MainTabProps<T extends keyof MainTabParamList> = NativeStackNavigationProp<MainTabParamList, T>;

export type MainTabNavigationProps<T extends keyof MainTabParamList> = CompositeNavigationProp<
  MainTabProps<T>,
  MainStackNavigationProps<'MainTab'>
>;

export interface ITabList {
  name: keyof MainTabParamList;
  component: ComponentType;
  tabBarLabel: '홈' | '재고현황' | '수리내역' | '마이페이지';
  icon: ImageSourcePropType;
  icon_focused: ImageSourcePropType;
}

export interface IMainTabImageProps {
  focused: boolean;
  icon: ImageSourcePropType;
  icon_focused: ImageSourcePropType;
}
