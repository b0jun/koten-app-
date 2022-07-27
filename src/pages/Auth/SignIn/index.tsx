import { yupResolver } from '@hookform/resolvers/yup';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Controller, get, useForm } from 'react-hook-form';
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

const schema = yup.object({
  email: yup.string().email('아이디(이메일) 형식이 올바르지 않습니다.').max(50).required('아이디를 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

const SignIn = ({ navigation }: IProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    resetField,
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) reset();
  }, [isFocused, reset]);

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

  const errorEmailMessages = get(errors, 'email')?.message;
  const errorPasswordMessages = get(errors, 'password')?.message;

  const emailInputStyle = {
    ...styles.inputText,
    borderBottomColor: errorEmailMessages ? colors.Warning : focusInput.email ? colors.Secondary : colors.Grey200,
    borderBottomWidth: errorEmailMessages || focusInput.email ? 2 : 1,
  };

  const passwordInputStyle = {
    ...styles.inputText,
    borderBottomColor: errorPasswordMessages ? colors.Warning : focusInput.password ? colors.Secondary : colors.Grey200,
    borderBottomWidth: errorPasswordMessages || focusInput.password ? 2 : 1,
  };

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
                keyboardType="email-address"
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

        {errorEmailMessages && <Text style={styles.errorText}>{errorEmailMessages}</Text>}
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
                textContentType="oneTimeCode"
                secureTextEntry
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
        {errorPasswordMessages && <Text style={styles.errorText}>{errorPasswordMessages}</Text>}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} activeOpacity={0.7}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerDivider}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PWResetEmailVerify')}
        >
          <Text style={styles.footerText}>비밀번호 재설정</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
