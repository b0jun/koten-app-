import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import globalStyles from '../../../styles/globalStyles';

const Login = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View />
      <Text>AS관리 서비스</Text>
    </SafeAreaView>
  );
};

export default Login;
