import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 26,
  },
  tableTitle: {
    fontFamily: 'NotoSansKR-Regular',
    letterSpacing: -0.48,
    fontSize: 12,
    lineHeight: 17,
    color: colors.Black,
    marginBottom: 8,
  },
  row: {
    ...globalStyles.row,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.Grey100,
  },
  rowTitle: {
    fontFamily: 'NotoSansKR-Medium',
    letterSpacing: -0.52,
    fontSize: 13,
    lineHeight: 17,
    color: colors.Black,
    width: 90,
    paddingVertical: 12,
    backgroundColor: colors.Grey50,
    paddingLeft: 16,
  },
  rowValue: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    letterSpacing: -0.52,
    fontSize: 13,
    lineHeight: 17,
    color: colors.Black,
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 20,
  },
  cell: {},
});

export default styles;
