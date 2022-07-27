import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.White,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
});

export default styles;
