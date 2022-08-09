import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  head: {
    ...globalStyles.row,
    height: 48,
    borderBottomColor: colors.Grey100,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headText: {
    color: colors.Black,
    fontFamily: 'NotoSansKR-Medium',
    letterSpacing: -0.52,
    fontSize: 13,
    lineHeight: 19,
  },
  bodyBorder: {
    borderBottomColor: colors.HeaderBorder,
    borderBottomWidth: 1,
  },
  body: {
    ...globalStyles.row,
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  bodyText: {
    color: colors.Black,
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 13,
    lineHeight: 19,
  },
  first: {
    flex: 1.1,
  },
  second: {
    flex: 2,
  },
  third: {
    flex: 1,
    textAlign: 'right',
  },
});

export default styles;
