import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logo: {
    width: 240,
    height: 34,
  },
  logoCaption: {
    marginTop: 8,
    marginBottom: 88,
    fontFamily: 'NotoSansKR-Light',
    fontSize: 16,
    letterSpacing: -0.8,
    lineHeight: 23,
  },
  inputTemp: {
    width: '100%',
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: colors.Grey200,
  },
  button: {
    marginTop: 80,
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: colors.Primary,
  },
  buttonText: {
    color: colors.White,
    fontSize: 14,
    letterSpacing: -0.56,
    fontFamily: 'NotoSansKR-Medium',
  },
  footer: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerDivider: {
    borderRightWidth: 1,
    borderRightColor: colors.Grey100,
    paddingRight: 16,
    marginRight: 16,
  },
  footerText: {
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: -0.6,
    fontFamily: 'NotoSansKR-Regular',
    color: colors.Grey500,
  },
});

export default styles;
