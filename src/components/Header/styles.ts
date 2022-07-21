import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  iconWrapper: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0.54,
    fontFamily: 'NotoSansKR-Medium',
    color: colors.Black,
  },
});

export default styles;
