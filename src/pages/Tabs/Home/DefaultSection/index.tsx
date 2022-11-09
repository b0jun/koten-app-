import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { IDefaultSection, IRepairList } from '~/api/home/getHomeInfoList';
import Dashboard from '~/components/Dashboard';
import Label from '~/components/Label';
import globalStyles from '~/styles/globalStyles';
import IDashboardList from '~/types/dashboard';

interface IProps {
  data: IDefaultSection;
}

const DefaultSection = ({ data }: IProps) => {
  console.log('DefaultSection:', data);

  const dashboardListA: IDashboardList[] = [
    {
      title: '신규접수',
      value: data.newReception,
    },
    {
      title: '수리대기',
      value: data.waitRepair,
    },
    {
      title: '출고대기',
      value: data.waitRelease,
    },
  ];

  const dashboardListB: IDashboardList[] = [
    {
      title: '발송준비',
      value: data.waitDelivery,
    },
    {
      title: '배송중',
      value: data.onDelivery,
    },
    {
      title: '배송완료',
      value: data.completeDelivery,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Dashboard isGap list={dashboardListA} />
      <Dashboard list={dashboardListB} />
      <Text style={styles.title}>수리 리스트</Text>
      {data.repairList.map(({ client, orderIndex, product, serialNumber }: IRepairList) => (
        <View style={styles.list} key={orderIndex}>
          <View>
            <Text style={styles.listItemText}>{product}</Text>
            <View style={globalStyles.row}>
              <Text style={styles.listItemSubText}>{serialNumber}</Text>
              <View style={styles.listItemDivider} />
              <Text style={styles.listItemSubText}>{client}</Text>
            </View>
          </View>
          {/* TODO: Repair Type 추가 */}
          {/* <Label type="repairA" /> */}
        </View>
      ))}
    </View>
  );
};

export default DefaultSection;
