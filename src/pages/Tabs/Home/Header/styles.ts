import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.HomeHeaderBorder,
  },
  logo: {
    width: 114,
    height: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
  rightWrapper: {
    flexDirection: 'row',
  },
  iconWrapper: {
    padding: 2,
  },
});

export default styles;
