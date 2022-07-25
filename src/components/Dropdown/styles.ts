import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: 'center',
  },
  moreIcon: {
    position: 'absolute',
    right: 12,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    letterSpacing: -0.42,
    height: 48,
    color: colors.Black,
    borderColor: colors.Grey200,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  inputAndroid: {
    fontSize: 16,
    letterSpacing: -0.42,
    height: 48,
    color: colors.Black,
    borderColor: colors.Grey200,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  placeholder: {
    color: colors.Black,
  },
});

export { styles, pickerSelectStyles };
