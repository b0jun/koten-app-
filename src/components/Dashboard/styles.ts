import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
    borderRadius: 10,
  },
  dashboardItem: {
    flex: 1,
    alignItems: 'center',
  },
  dashboardThrRowCenterItem: {
    flex: 1.2,
    alignItems: 'center',
  },
  dashboardBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.DashboardBorder,
  },
  dashboardItemTitle: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.56,
    color: colors.White,
  },
  dashboardItemValue: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -1.44,
    color: colors.Secondary,
    marginTop: 14,
  },
});

export default styles;
