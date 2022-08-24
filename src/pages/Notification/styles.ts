import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  notiWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.Grey50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },

  notiType: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
    lineHeight: 17,
    color: colors.Black,
  },
  notiTitle: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    letterSpacing: -0.42,
    lineHeight: 20,
    color: colors.Black,
    marginBottom: 8,
  },
  notiDate: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
    lineHeight: 17,
    color: colors.Black,
  },
  detailButton: {
    width: 48,
    height: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
