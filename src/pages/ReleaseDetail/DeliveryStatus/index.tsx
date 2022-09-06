import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';

interface IProps {
  status: '출고대기' | '발송준비' | '배송중' | '배송완료';
}

const deliveryStatusList = ['출고대기', '발송준비', '배송중', '배송완료'];

const DeliveryStatus = ({ status }: IProps) => {
  return (
    <View style={styles.container}>
      {deliveryStatusList.map((value, index) => {
        const isActive = value === status;
        const isLast = deliveryStatusList.length - 1 === index;
        const circleStyles = {
          ...styles.circle,
          backgroundColor: isActive ? colors.DeliveryActiveBG : colors.DeliveryInactiveBG,
          borderColor: isActive ? colors.Secondary : colors.Grey500,
          marginRight: isLast ? 0 : 20,
        };
        return (
          <View style={circleStyles}>
            <Text style={styles.text}>{value}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default DeliveryStatus;
