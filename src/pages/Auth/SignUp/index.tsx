import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import colors from '~/styles/colors';

// TODO: TextInput HookForm 연결

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header isBack title="회원가입" />
    </SafeAreaView>
  );
};

export default SignUp;
