import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

import colors from '~/styles/colors';

// TODO: API 값에 따라 CommonTable Props 수정
const tableData = {
  type: 'common',
  title: '제품정보',
  rows: [
    { key: 1, rowTitle: '제품명', rowValue: '코텐 미니레이저 레벨기' },
    { key: 2, rowTitle: '제품분류', rowValue: '코텐 미니레이저 레벨기' },
    { key: 3, rowTitle: '브랜드', rowValue: 'Koten' },
  ],
};

const CommonTable = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tableTitle}>{tableData.title}</Text>
      {tableData.rows.map(({ key, rowTitle, rowValue }, index) => {
        const rowStyles =
          tableData.rows.length - 1 === index
            ? {
                ...styles.row,
                borderBottomWidth: 1,
                borderBottomColor: colors.Grey100,
              }
            : { ...styles.row };
        return (
          <View key={key} style={rowStyles}>
            <Text style={styles.rowTitle}>{rowTitle}</Text>
            <Text style={styles.rowValue}>{rowValue}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CommonTable;
