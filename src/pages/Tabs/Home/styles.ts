import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  inner: {
    paddingVertical: 24,
    marginHorizontal: 16,
    flex: 1,
  },
  currentDate: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 18,
    lineHeight: 22,
    color: colors.Black,
    marginBottom: 16,
  },
});

export default styles;
