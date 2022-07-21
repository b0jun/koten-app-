import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, TouchableOpacity, Text, TextInput, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';

import styles from './styles';

import { AuthStackNavigationProps } from '~/routes';
import colors from '~/styles/colors';

interface IFormData {
  email: string;
  password: string;
}
type inputType = 'email' | 'password';

interface IProps {
  navigation: AuthStackNavigationProps<'SignIn'>;
}

// TODO: TextInput HookForm 연결
const schema = yup.object({
  email: yup
    .string()
    .email('아이디(이메엘) 형식이 올바르지 않습니다.')
    .max(50)
    .required('아이디(이메일)을 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호를 8자 이상 ~ 15자 이하로 입력해주세요.')
    .max(15, '비밀번호를 8자 이상 ~ 15자 이하로 입력해주세요.')
    .required('비밀번호를 입력해주세요.'),
});

const SignIn = ({ navigation }: IProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    resetField,
    setError,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const resetInputValue = (type: inputType) => {
    resetField(type);
  };

  // TODO: 추후 타입 지정
  const onSubmit = (data) => console.log(data);

  const [focusInput, setFocusInput] = useState({
    email: false,
    password: false,
  });

  const onFocus = (type: inputType) => {
    setFocusInput((prevState) => {
      return { ...prevState, [type]: true };
    });
  };

  const onBlur = (type: inputType) => {
    setFocusInput((prevState) => {
      return { ...prevState, [type]: false };
    });
  };

  const emailInputStyle = focusInput.email ? styles.focusBorder : styles.commonBorder;
  const passwordInputStyle = focusInput.password ? styles.focusBorder : styles.commonBorder;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('~/assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.logoCaption}>AS관리 서비스</Text>
      <View style={styles.formWrapper}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, name } }) => (
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputText, emailInputStyle]}
                value={value}
                placeholder="이메일 입력"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={colors.Grey500}
                onChangeText={(text) => {
                  clearErrors();
                  onChange(text);
                }}
                onFocus={() => onFocus(name)}
                onBlur={() => onBlur(name)}
              />
              {value && (
                <Pressable style={styles.clearButton} onPress={() => resetInputValue(name)}>
                  <Image source={require('~/assets/icons/ic_text_close.png')} style={styles.clearIcon} />
                </Pressable>
              )}
            </View>
          )}
        />

        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, name } }) => (
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputText, passwordInputStyle]}
                value={value}
                placeholder="비밀번호 입력"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={colors.Grey500}
                onChangeText={(text) => {
                  clearErrors();
                  onChange(text);
                }}
                onFocus={() => onFocus(name)}
                onBlur={() => onBlur(name)}
              />
              {value && (
                <Pressable style={styles.clearButton} onPress={() => resetInputValue(name)}>
                  <Image source={require('~/assets/icons/ic_text_close.png')} style={styles.clearIcon} />
                </Pressable>
              )}
            </View>
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignUp');
          // TODO: hook form으로 전환
          // handleSubmit(onSubmit))
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerDivider} activeOpacity={0.7}>
          <Text style={styles.footerText}>비밀번호 재설정</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.footerText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
