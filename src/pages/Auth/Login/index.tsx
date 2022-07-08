import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../../../styles/colors';

import styles from './styles';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.logoCaption}>AS관리 서비스</Text>
      <TextInput style={styles.inputTemp} placeholder="이메일 입력" placeholderTextColor={colors.Grey500} />
      <TextInput style={styles.inputTemp} placeholder="비밀번호 입력" placeholderTextColor={colors.Grey500} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>로그인</Text>
      </Pressable>
      <View style={styles.footer}>
        <Pressable style={styles.footerDivider}>
          <Text style={styles.footerText}>비밀번호 재설정</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.footerText}>회원가입</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
