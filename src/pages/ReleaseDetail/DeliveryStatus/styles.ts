import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.row,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
    borderBottomColor: colors.HeaderBorder,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  text: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 12,
    letterSpacing: -0.36,
    lineHeight: 17,
    color: colors.Black,
  },
});

export default styles;
