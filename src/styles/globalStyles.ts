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
  detailLabel: {
    fontFamily: 'NotoSansKR-Bold',
    letterSpacing: -0.56,
    fontSize: 14,
    lineHeight: 20,
    color: colors.Black,
    marginBottom: 16,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowTitle: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    letterSpacing: -0.7,
    fontSize: 14,
    lineHeight: 28,
    color: colors.Grey500,
  },
  rowValue: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    letterSpacing: -0.42,
    fontSize: 14,
    lineHeight: 28,
    color: colors.Black,
  },
  rowDivider: {
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomColor: colors.Grey100,
    borderBottomWidth: 1,
  },
  formButtonWrapper: {
    marginBottom: 20,
  },
  formButtonWrapperWithHorizontal: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
  head: {
    flexDirection: 'row',
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
    flexDirection: 'row',
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
});

export default globalStyles;
