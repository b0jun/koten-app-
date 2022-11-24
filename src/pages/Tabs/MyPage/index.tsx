import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';

import Option from './Option';
import styles from './styles';

import useLogout from '~/hooks/api/useLogout';
import { MainNavigatorParamList } from '~/routes/types';
import globalStyles from '~/styles/globalStyles';

const MyPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigatorParamList>>();

  const goToPage = () => {
    navigation.navigate('Notification');
  };

  const { mutate: logout } = useLogout();

  const defaultOptions = [
    {
      title: '거래처 관리',
      page: 'CustomerManagement',
    },
    {
      title: '고객 관리',
      page: 'ClientManagement',
    },
    {
      title: '출고 관리',
      page: 'ReleaseManagement',
    },
    // TODO: 삭제
    {
      title: '정산 관리',
      page: 'AccountManagement',
    },
    {
      title: '제품 출고요청',
      page: 'ProductReleaseRequest',
    },
    {
      title: '입/출고 관리',
      page: '',
    },
  ];

  const logisticsOptions = [
    ...defaultOptions,
    {
      title: '제품 출고요청',
      page: 'ProductReleaseRequest',
    },
    {
      title: '입/출고 관리',
      page: '',
    },
  ];

  const accountingOptions = [
    ...defaultOptions,
    {
      title: '정산 관리',
      page: 'AccountManagement',
    },
  ];

  const myOptions = [
    {
      title: '개인정보 수정',
      page: 'ModifyUserInfo',
    },
    {
      title: '로그아웃',
      onPress: () => {
        logout();
      },
    },
  ];
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.topSafeArea}>
        <View style={styles.topWrapper}>
          <View style={globalStyles.row}>
            <View>
              <View style={styles.topItemWrapper}>
                <Text style={styles.name}>홍길동님</Text>
                <View style={styles.officeWrapper}>
                  <Text style={styles.office}>인천본사</Text>
                </View>
              </View>
              <Text style={styles.email}>koten@naver.com</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={goToPage}>
            <Image source={require('~/assets/icons/ic_push_w.png')} style={styles.pushIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomSafeArea}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollView}>
          <Option optionTitle="나의업무" list={defaultOptions} />
          <Option optionTitle="My" list={myOptions} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MyPage;
