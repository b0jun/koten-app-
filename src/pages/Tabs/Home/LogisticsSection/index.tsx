import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

import { ILogisticsSection } from '~/api/home/getHomeInfoList';
import Dashboard from '~/components/Dashboard';
import IDashboardList from '~/types/dashboard';

interface IProps {
  data: ILogisticsSection;
}

const LogisticsSection = ({ data }: IProps) => {
  const { inItem, moveItem, outItem, releaseRequest, waitRelease, stockList } = data;
  const dashboardListA: IDashboardList[] = [
    {
      title: '출고대기',
      value: waitRelease,
    },
    {
      title: '제품 출고 요청',
      value: releaseRequest,
    },
  ];

  const dashboardListB: IDashboardList[] = [
    {
      title: '입고',
      value: inItem,
    },
    {
      title: '출고',
      value: outItem,
    },
    {
      title: '재고 변동',
      value: moveItem,
    },
  ];
  return (
    <View style={styles.wrapper}>
      <Dashboard isGap list={dashboardListA} />
      <Dashboard list={dashboardListB} />
      <Text style={styles.title}>입/출고 리스트</Text>
      {stockList.map(({ office, officeIndex, product, productIndex, quantity }) => (
        <View key={`${officeIndex}_${productIndex}`} style={styles.list}>
          <Text style={styles.listItemText}>{office}</Text>
          <View style={styles.listItemWrapper}>
            <Text style={styles.listItemSubText}>{10}개</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default LogisticsSection;
