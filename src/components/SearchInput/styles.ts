import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.row,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 6,
    borderBottomColor: colors.HeaderBorder,
  },
  input: {
    color: colors.Grey600,
    height: 48,
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default styles;
