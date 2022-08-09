import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

import Dashboard from '~/components/Dashboard';
import Label from '~/components/Label';
import globalStyles from '~/styles/globalStyles';
import IDashboardList from '~/types/dashboard';

const LogisticsSection = () => {
  const dashboardListA: IDashboardList[] = [
    {
      title: '신규접수',
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
      <Text style={styles.title}>재고 리스트</Text>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_down.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_up.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_up.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_up.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_up.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_up.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItemText}>코텐 미니레이저 레벨기</Text>
        <View style={styles.listItemWrapper}>
          <Image source={require('~/assets/icons/ic_up.png')} style={styles.listItemIcon} />
          <Text style={styles.listItemSubText}>{10}개</Text>
        </View>
      </View>
    </View>
  );
};

export default LogisticsSection;
