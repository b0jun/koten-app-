import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: 16,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 34,
    marginBottom: 64,
  },
  title: {
    color: colors.Black,
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Bold',
    letterSpacing: -1,
    lineHeight: 25,
    marginBottom: 16,
  },
  description: {
    color: colors.Grey600,
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    letterSpacing: -0.7,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default styles;
