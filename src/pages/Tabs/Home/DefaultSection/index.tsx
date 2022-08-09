import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import Dashboard from '~/components/Dashboard';
import Label from '~/components/Label';
import globalStyles from '~/styles/globalStyles';
import IDashboardList from '~/types/dashboard';

const DefaultSection = () => {
  const dashboardListA: IDashboardList[] = [
    {
      title: '신규접수',
      value: 10,
    },
    {
      title: '수리대기',
      value: 10,
    },
    {
      title: '출고대기',
      value: 10,
    },
  ];

  const dashboardListB: IDashboardList[] = [
    {
      title: '발송준비',
      value: 10,
    },
    {
      title: '배송중',
      value: 10,
    },
    {
      title: '배송완료',
      value: 10,
    },
  ];
  return (
    <View style={styles.wrapper}>
      <Dashboard isGap list={dashboardListA} />
      <Dashboard list={dashboardListB} />
      <Text style={styles.title}>수리 리스트</Text>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
        </View>
        <Label type="repairA" />
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
        </View>
        <Label type="repairB" />
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
        </View>
        <Label type="repairB" />
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
        </View>
        <Label type="repairB" />
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
          <View style={globalStyles.row}>
            <Text style={styles.listItemSubText}>112111010001</Text>
            <View style={styles.listItemDivider} />
            <Text style={styles.listItemSubText}>스마트 스토어</Text>
          </View>
        </View>
        <Label type="repairB" />
      </View>
    </View>
  );
};

export default DefaultSection;
