import dayjs from 'dayjs';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AccountingSection from './AccountingSection';
import DefaultSection from './DefaultSection';
import Header from './Header';
import LogisticsSection from './LogisticsSection';
import styles from './styles';

import globalStyles from '~/styles/globalStyles';

const Home = () => {
  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header />
      <ScrollView style={styles.inner}>
        <Text style={styles.currentDate}>{dayjs().format('YYYY.MM.DD')}</Text>
        {/* Default */}
        <DefaultSection />
        {/* Logistics */}
        {/* <LogisticsSection /> */}

        {/* Accounting */}
        {/* <AccountingSection /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
