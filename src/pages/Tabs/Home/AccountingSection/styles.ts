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
    marginBottom: 2,
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
  listItemPriceText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: colors.Black,
    marginTop: 5,
  },
  dashboard: {
    padding: 24,
    borderRadius: 10,
  },
  dashboardItemTitle: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.56,
    color: colors.White,
  },
  dashboardItemPriceWrapper: {
    ...globalStyles.row,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.DashboardBorder,
    paddingBottom: 13,
    marginBottom: 16,
  },
  dashboardItemPrice: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 28,
    lineHeight: 35,
    color: colors.Secondary,
  },
  dashboardItemUnit: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 18,
    lineHeight: 22,
    color: colors.Secondary,
    marginLeft: 8,
    marginBottom: 3,
  },
  dashboardSubItemWrapper: {
    ...globalStyles.row,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashboardSubItemWrapperGap: {
    marginBottom: 8,
  },
  dashboardSubItemKey: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
    letterSpacing: -0.56,
    lineHeight: 20,
    color: colors.DashboardSub,
  },
  dashboardSubItemValue: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: colors.White,
  },
});

export default styles;
