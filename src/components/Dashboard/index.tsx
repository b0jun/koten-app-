import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import colors from '~/styles/colors';
import IDashboardList from '~/types/dashboard';

interface IProps {
  isGap?: boolean;
  list: IDashboardList[];
}

const Dashboard = ({ isGap = false, list }: IProps) => {
  const dashboardStyles = {
    ...styles.dashboard,
    marginBottom: isGap ? 16 : 0,
  };

  const isListOfThreeLength = list.length === 3;
  return (
    <LinearGradient colors={[colors.DashboardTop, colors.DashboardBottom]} style={dashboardStyles}>
      {list.map(({ title, value }, index) => {
        const isNotLast = index !== list.length - 1;
        const isCenterListOfThree = isListOfThreeLength && index === 1;
        return (
          <View
            key={title}
            style={[
              isCenterListOfThree ? styles.dashboardThrRowCenterItem : styles.dashboardItem,
              isNotLast && styles.dashboardBorder,
            ]}
          >
            <Text style={styles.dashboardItemTitle}>{title}</Text>
            <Text style={styles.dashboardItemValue}>{value}</Text>
          </View>
        );
      })}
    </LinearGradient>
  );
};

export default Dashboard;
