import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import { IAccountingSection } from '~/api/home/getHomeInfoList';
import Dashboard from '~/components/Dashboard';
import Label from '~/components/Label';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';
import IDashboardList from '~/types/dashboard';
import { insertComma } from '~/utils/common';

interface IProps {
  data: IAccountingSection;
}

const AccountingSection = ({ data }: IProps) => {
  const { waitDeposit, successDeposit, depositPrice, settleList } = data;
  const { settle, success, total, wait } = depositPrice;
  const dashboardListA: IDashboardList[] = [
    {
      title: '입금대기',
      value: waitDeposit,
    },
    {
      title: '입금완료',
      value: successDeposit,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Dashboard isGap list={dashboardListA} />
      <LinearGradient colors={[colors.DashboardTop, colors.DashboardBottom]} style={styles.dashboard}>
        <Text style={styles.dashboardItemTitle}>총 정산 금액</Text>
        <View style={styles.dashboardItemPriceWrapper}>
          <Text style={styles.dashboardItemPrice}>{insertComma(total)}</Text>
          <Text style={styles.dashboardItemUnit}>원</Text>
        </View>
        <View style={[styles.dashboardSubItemWrapper, styles.dashboardSubItemWrapperGap]}>
          <Text style={styles.dashboardSubItemKey}>입금대기</Text>
          <Text style={styles.dashboardSubItemValue}>{insertComma(wait)} 원</Text>
        </View>
        <View style={[styles.dashboardSubItemWrapper, styles.dashboardSubItemWrapperGap]}>
          <Text style={styles.dashboardSubItemKey}>입금완료</Text>
          <Text style={styles.dashboardSubItemValue}>{insertComma(success)} 원</Text>
        </View>
        <View style={styles.dashboardSubItemWrapper}>
          <Text style={styles.dashboardSubItemKey}>후 정산 금액</Text>
          <Text style={styles.dashboardSubItemValue}>{insertComma(settle)} 원</Text>
        </View>
      </LinearGradient>
      <Text style={styles.title}>정산 리스트</Text>
      {settleList.map(({ clientName, orderIndex, price, state }) => {
        let labelType = '';
        if (state === '입금대기') {
          labelType = 'depositA';
        } else if (state === '후 정산') {
          labelType = 'depositB';
        } else if (state === '입금완료') {
          labelType = 'depositC';
        }
        return (
          <View key={orderIndex} style={styles.list}>
            <View>
              <Text style={styles.listItemText}>{clientName}</Text>
              <Text style={styles.listItemPriceText}>{price ? insertComma(price) : '-'}원</Text>
            </View>
            <Label type={labelType} />
          </View>
        );
      })}
    </View>
  );
};

export default AccountingSection;
