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
    ...globalStyles.row,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  scrollViewInner: {
    paddingBottom: 60,
  },
});

export default styles;
