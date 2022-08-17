import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: colors.Black,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: colors.White,
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 33,
    paddingHorizontal: 16,
  },
  topItemWrapper: {
    ...globalStyles.row,
    alignItems: 'center',
    marginBottom: 2,
  },
  profileImage: {
    width: 56,
    height: 56,
    marginRight: 16,
  },
  name: {
    color: colors.White,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 24,
    letterSpacing: -1.2,
    lineHeight: 35,
    marginRight: 6,
  },
  officeWrapper: {
    backgroundColor: colors.White200,
    borderColor: colors.White,
    borderWidth: 1,
    borderRadius: 11,
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginTop: 2,
  },
  office: {
    color: colors.White,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 17,
  },
  email: {
    color: colors.White800,
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  pushIcon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    paddingTop: 40,
  },
});

export default styles;
