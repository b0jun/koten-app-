import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

import colors from '~/styles/colors';

const tableData = {
  type: 'sum',
  title: '재고현황',
  rows: [
    { key: 1, rowTitle: 'A창고', rowValue: 250 },
    { key: 2, rowTitle: 'A창고', rowValue: 250 },
    { key: 3, rowTitle: 'A창고', rowValue: 500 },
  ],
};

const SumTable = () => {
  const sum = tableData.rows.reduce((a, b) => a + b.rowValue, 0);
  const sumRow = { key: 0, rowTitle: '합계', rowValue: sum };
  const tempRows = tableData.rows.concat(sumRow);
  return (
    <View style={styles.container}>
      <Text style={styles.tableTitle}>{tableData.title}</Text>
      {tempRows.map(({ key, rowTitle, rowValue }, index) => {
        const isLast = tempRows.length - 1 === index;
        const rowStyles = isLast
          ? {
              ...styles.row,
              borderBottomWidth: 1,
              borderBottomColor: colors.Grey100,
            }
          : { ...styles.row };
        return (
          <View key={key} style={rowStyles}>
            <Text style={styles.rowTitle}>{rowTitle}</Text>
            <Text style={styles.rowValue}>{rowValue}개</Text>
          </View>
        );
      })}
    </View>
  );
};

export default SumTable;
