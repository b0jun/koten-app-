import { StyleSheet } from 'react-native';

import colors from '~/styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000080',
  },
  wrapper: {
    width: '90%',
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: colors.White,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'NotoSansKR-Bold',
    letterSpacing: -0.8,
    fontSize: 16,
    lineHeight: 32,
    color: colors.Black,
  },
  gap: {
    marginTop: 15,
  },
});

export default styles;
