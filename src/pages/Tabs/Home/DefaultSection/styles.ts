import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    lineHeight: 29,
    letterSpacing: -0.8,
    color: colors.Black,
    marginTop: 32,
  },
  list: {
    ...globalStyles.row,
    justifyContent: 'space-between',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.HeaderBorder,
  },
  listItemText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    letterSpacing: -0.56,
    lineHeight: 20,
    color: colors.Black,
    marginBottom: 8,
  },
  listItemSubText: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 12,
    letterSpacing: -0.48,
    lineHeight: 15,
    color: colors.Grey500,
  },
  listItemDivider: {
    width: 1,
    height: '100%',
    backgroundColor: colors.Grey200,
    marginHorizontal: 8,
  },
});

export default styles;
