import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.Secondary} />
    </View>
  );
};
export default Loading;
