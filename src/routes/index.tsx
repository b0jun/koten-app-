import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';

import styles from './styles';
import {
  AuthNavigatorParamList,
  IMainTabImageProps,
  ITabList,
  MainNavigatorParamList,
  MainTabParamList,
  RootStackParamList,
} from './types';

import AccountManagement from '~/pages/AccountManagement ';
import PWResetCompleted from '~/pages/Auth/PWResetCompleted';
import PWResetEmailVerify from '~/pages/Auth/PWResetEmailVerify';
import PWResetMain from '~/pages/Auth/PWResetMain';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import SignUpCompleted from '~/pages/Auth/SignUpCompleted';
import ClientManagement from '~/pages/ClientManagement';
import CustomerManagement from '~/pages/CustomerManagement';
import ModifyUserInfo from '~/pages/ModifyUserInfo';
import Notification from '~/pages/Notification';
import ProductReleaseRequest from '~/pages/ProductReleaseRequest';
import ReleaseManagement from '~/pages/ReleaseManagement';
import RepairHistoryDetail from '~/pages/RepairHistoryDetail';
import Home from '~/pages/Tabs/Home';
import InventoryStatus from '~/pages/Tabs/InventoryStatus';
import MyPage from '~/pages/Tabs/MyPage';
import RepairHistory from '~/pages/Tabs/RepairHistory';
import colors from '~/styles/colors';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();
const MainStack = createNativeStackNavigator<MainNavigatorParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignUpCompleted" component={SignUpCompleted} />
      <AuthStack.Screen name="PWResetEmailVerify" component={PWResetEmailVerify} />
      <AuthStack.Screen name="PWResetMain" component={PWResetMain} />
      <AuthStack.Screen name="PWResetCompleted" component={PWResetCompleted} />
    </AuthStack.Navigator>
  );
};

const tabList: ITabList[] = [
  {
    name: 'Home',
    component: Home,
    tabBarLabel: '홈',
    icon: require('~/assets/icons/ic_navi_home.png'),
    icon_focused: require('~/assets/icons/ic_navi_home_y.png'),
  },
  {
    name: 'InventoryStatus',
    component: InventoryStatus,
    tabBarLabel: '재고현황',
    icon: require('~/assets/icons/ic_navi_box.png'),
    icon_focused: require('~/assets/icons/ic_navi_box_y.png'),
  },
  {
    name: 'RepairHistory',
    component: RepairHistory,
    tabBarLabel: '수리내역',
    icon: require('~/assets/icons/ic_navi_list.png'),
    icon_focused: require('~/assets/icons/ic_navi_list_y.png'),
  },
  {
    name: 'MyPage',
    component: MyPage,
    tabBarLabel: '마이페이지',
    icon: require('~/assets/icons/ic_navi_user.png'),
    icon_focused: require('~/assets/icons/ic_navi_user_y.png'),
  },
];

const MainTab = () => {
  const MemoizedNestedComponent = React.useCallback(
    (props: IMainTabImageProps) => (
      <Image source={props.focused ? props.icon_focused : props.icon} style={styles.icon} />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          lineHeight: 12,
          margin: 0,
          marginBottom: 3,
          padding: 0,
        },
        tabBarIconStyle: {
          width: 24,
          height: 24,
          marginTop: 4,
        },
        tabBarActiveTintColor: colors.Secondary,
        tabBarInactiveTintColor: colors.Grey600,
      }}
    >
      {tabList.map(({ name, component, tabBarLabel, icon, icon_focused }) => (
        <Tab.Screen
          key={tabBarLabel}
          name={name}
          component={component}
          options={{
            tabBarLabel,
            tabBarIcon: ({ focused }) => {
              return MemoizedNestedComponent({ focused, icon, icon_focused });
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="MainTab" component={MainTab} />
      <MainStack.Screen name="ModifyUserInfo" component={ModifyUserInfo} />
      <MainStack.Screen name="RepairHistoryDetail" component={RepairHistoryDetail} />
      <MainStack.Screen name="Notification" component={Notification} />
      <MainStack.Screen name="CustomerManagement" component={CustomerManagement} />
      <MainStack.Screen name="ClientManagement" component={ClientManagement} />
      <MainStack.Screen name="ReleaseManagement" component={ReleaseManagement} />
      <MainStack.Screen name="AccountManagement" component={AccountManagement} />
      <MainStack.Screen name="ProductReleaseRequest" component={ProductReleaseRequest} />
    </MainStack.Navigator>
  );
};
const AppRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <RootStack.Screen name="AuthNavigator" component={AuthNavigator} /> */}
        <RootStack.Screen name="MainNavigator" component={MainNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
