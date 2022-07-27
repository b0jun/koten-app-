import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.White,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonWrapper: {
    width: 110,
    marginLeft: 4,
  },
});

export default styles;
