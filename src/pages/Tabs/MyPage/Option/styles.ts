import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  optionTitleBorder: {
    borderBottomColor: colors.Grey100,
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  optionTitle: {
    color: colors.Grey500,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 12,
    letterSpacing: -0.36,
    lineHeight: 17,
  },
  optionItemButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  optionItem: {
    color: colors.Black,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    letterSpacing: -0.48,
    lineHeight: 24,
  },
});

export default styles;
