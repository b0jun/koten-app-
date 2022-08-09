import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import Dashboard from '~/components/Dashboard';
import Label from '~/components/Label';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';
import IDashboardList from '~/types/dashboard';

const AccountingSection = () => {
  const dashboardListA: IDashboardList[] = [
    {
      title: '입급대기',
      value: 10,
    },
    {
      title: '입금완료',
      value: 10,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Dashboard isGap list={dashboardListA} />
      <LinearGradient colors={[colors.DashboardTop, colors.DashboardBottom]} style={styles.dashboard}>
        <Text style={styles.dashboardItemTitle}>총 정산 금액</Text>
        <View style={styles.dashboardItemPriceWrapper}>
          <Text style={styles.dashboardItemPrice}>71,349,500</Text>
          <Text style={styles.dashboardItemUnit}>원</Text>
        </View>
        <View style={[styles.dashboardSubItemWrapper, styles.dashboardSubItemWrapperGap]}>
          <Text style={styles.dashboardSubItemKey}>입금대기</Text>
          <Text style={styles.dashboardSubItemValue}>1,349,500 원</Text>
        </View>
        <View style={[styles.dashboardSubItemWrapper, styles.dashboardSubItemWrapperGap]}>
          <Text style={styles.dashboardSubItemKey}>입금완료</Text>
          <Text style={styles.dashboardSubItemValue}>60,000,000 원</Text>
        </View>
        <View style={styles.dashboardSubItemWrapper}>
          <Text style={styles.dashboardSubItemKey}>후 정산 금액</Text>
          <Text style={styles.dashboardSubItemValue}>10,000,000 원</Text>
        </View>
      </LinearGradient>
      <Text style={styles.title}>정산 리스트</Text>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
          <Text style={styles.listItemPriceText}>123,000원</Text>
        </View>
        <Label type="depositA" />
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
          <Text style={styles.listItemPriceText}>123,000원</Text>
        </View>
        <Label type="depositC" />
      </View>
    </View>
  );
};

export default AccountingSection;
