import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
  },
  titleLine: {
    borderBottomColor: colors.Black,
    borderBottomWidth: 1.4,
    marginBottom: 24,
    paddingBottom: 16,
  },
  date: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 15,
    lineHeight: 28,
    color: colors.Black,
  },
  labelWrapper: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  scrollViewInner: {
    paddingBottom: 60,
  },
  divider: {
    borderBottomColor: colors.HeaderBorder,
    borderBottomWidth: 8,
    marginVertical: 20,
  },
  productWrapper: {
    ...globalStyles.row,
    justifyContent: 'space-between',
  },
  productWrapperWithDivider: {
    ...globalStyles.row,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.Grey100,
    marginBottom: 16,
    paddingBottom: 16,
    flex: 1,
  },
  productLeftWrapper: {
    ...globalStyles.row,
    flex: 1,
  },

  productItemWrapper: {
    flex: 1,
    marginRight: 8,
  },
  productImage: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  productTitle: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.7,
    color: colors.Black,
    marginBottom: 7,
  },
  productValue: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.6,
    color: colors.Grey600,
  },
  rowWithDivider: {
    ...globalStyles.rowWrapper,
    borderTopWidth: 0.5,
    borderTopColor: colors.Grey400,
    marginTop: 16,
    paddingTop: 16,
  },
  paymentTitle: {
    ...globalStyles.rowTitle,
    color: colors.Black,
  },
  paymentValue: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 18,
    lineHeight: 28,
    color: colors.Black,
  },
});

export default styles;
