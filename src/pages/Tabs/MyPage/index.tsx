import React from 'react';
import { ScrollView, Text, View, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';

import Option from './Option';
import styles from './styles';

import globalStyles from '~/styles/globalStyles';

const MyPage = () => {
  const defaultOptions = [
    {
      title: '거래처 관리',
      page: '',
    },
    {
      title: '고객 관리',
      page: '',
    },
    {
      title: '출고 관리',
      page: '',
    },
  ];

  const logisticsOptions = [
    ...defaultOptions,
    {
      title: '제품 출고요청',
      page: '',
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
      page: '',
    },
  ];

  const appInfoOptions = [
    {
      title: '버전정보',
      page: '',
    },
    {
      title: '서비스 이용약관',
      page: '',
    },
    {
      title: '개인정보 처리방침',
      page: '',
    },
  ];

  const myOptions = [
    {
      title: '개인정보 수정',
      page: 'ModifyUserInfo',
    },
    {
      title: '로그아웃',
      page: '',
    },
  ];
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.topSafeArea}>
        <View style={styles.topWrapper}>
          <View style={globalStyles.row}>
            <Image source={require('~/assets/images/img_profile.png')} style={styles.profileImage} />
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
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={require('~/assets/icons/ic_push_w.png')} style={styles.pushIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomSafeArea}>
        <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
          <Option optionTitle="나의업무" list={defaultOptions} />
          <Option optionTitle="앱정보" list={appInfoOptions} />
          <Option optionTitle="My" list={myOptions} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MyPage;
