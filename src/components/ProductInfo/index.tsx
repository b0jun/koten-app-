import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import globalStyles from '~/styles/globalStyles';

interface IProps {
  customer: string;
  serialNumber: string;
  product: string;
}

const ProductInfo = ({ customer, serialNumber, product }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.detailLabel}>제품정보</Text>
      <View style={globalStyles.rowWrapper}>
        <Text style={globalStyles.rowTitle}>거래처명</Text>
        <Text style={globalStyles.rowValue}>{customer}</Text>
      </View>
      <View style={globalStyles.rowWrapper}>
        <Text style={globalStyles.rowTitle}>일련번호</Text>
        <Text style={globalStyles.rowValue}>{serialNumber}</Text>
      </View>
      <View style={globalStyles.rowWrapper}>
        <Text style={globalStyles.rowTitle}>제품명</Text>
        <Text style={globalStyles.rowValue}>{product}</Text>
      </View>
    </View>
  );
};

export default ProductInfo;
