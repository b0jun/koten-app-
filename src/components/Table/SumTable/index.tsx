import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

import colors from '~/styles/colors';

interface IRows {
  key: number;
  rowTitle: string;
  rowValue: number;
}
interface ITableData {
  title: string;
  rows: IRows[];
}

interface IProps {
  tableData: ITableData;
}

const SumTable = ({ tableData }: IProps) => {
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
