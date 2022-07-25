import { StyleSheet } from 'react-native';

import colors from './colors';

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrowWithWhite: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  label: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 12,
    letterSpacing: -0.36,
    lineHeight: 17,
    color: colors.Black,
    marginBottom: 5,
  },
  formButtonWrapper: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
});

export default globalStyles;
