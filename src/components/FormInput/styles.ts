import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 56,
    color: colors.Label,
    fontSize: 15,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  errorText: {
    marginTop: 4,
    color: colors.Warning,
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 17,
  },
});

export default styles;
