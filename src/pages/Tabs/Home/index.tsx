import { useIsFocused } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import AccountingSection from './AccountingSection';
import DefaultSection from './DefaultSection';
import Header from './Header';
import LogisticsSection from './LogisticsSection';
import styles from './styles';

import useGetHomeInfoList from '~/hooks/api/useGetHomeInfoList';
import useGetUserInfo from '~/hooks/api/useGetUserInfo';
import { RootState } from '~/store/configureStore';
import globalStyles from '~/styles/globalStyles';
// 홈: M(마스터), A(영업), E(미정)
// 물류: C(물류),
// 회계: D(회계),
const Home = () => {
  const isFocused = useIsFocused();
  const { refetch } = useGetUserInfo();
  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const { data } = useGetHomeInfoList(userInfo?.type);

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header />
      <ScrollView style={styles.inner}>
        <Text style={styles.currentDate}>{dayjs().format('YYYY.MM.DD')}</Text>
        {userInfo?.type === 'C' ? (
          <LogisticsSection data={data} />
        ) : userInfo?.type === 'D' ? (
          <AccountingSection data={data} />
        ) : (
          <DefaultSection data={data} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
