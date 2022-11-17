import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

import colors from '~/styles/colors';

interface IRows {
  rowTitle: string;
  rowValue: string | undefined;
}
interface ITableData {
  title?: string;
  rows: IRows[];
}

interface IProps {
  tableData: ITableData;
}

const CommonTable = ({ tableData }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tableTitle}>{tableData.title}</Text>
      {tableData.rows.map(({ rowTitle, rowValue }, index) => {
        const rowStyles =
          tableData.rows.length - 1 === index
            ? {
                ...styles.row,
                borderBottomWidth: 1,
                borderBottomColor: colors.Grey100,
              }
            : { ...styles.row };
        return (
          <View key={rowTitle} style={rowStyles}>
            <Text style={styles.rowTitle}>{rowTitle}</Text>
            <Text style={styles.rowValue}>{rowValue}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CommonTable;
