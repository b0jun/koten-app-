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
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.HeaderBorder,
  },
  listItemText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    letterSpacing: -0.56,
    lineHeight: 20,
    color: colors.Black,
  },
  listItemSubText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 14,
    lineHeight: 18,
    color: colors.Black,
  },
  listItemWrapper: {
    ...globalStyles.row,
    alignItems: 'center',
  },
  listItemIcon: {
    width: 18,
    height: 18,
  },
});

export default styles;
