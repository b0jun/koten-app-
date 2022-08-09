import { StyleSheet } from 'react-native';

import colors from './colors';

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexWithBG: {
    flex: 1,
    backgroundColor: colors.White,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexGrowWithBG: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
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
  },
  formButtonWrapperWithHorizontal: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
});

export default globalStyles;
