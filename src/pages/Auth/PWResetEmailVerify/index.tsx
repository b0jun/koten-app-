import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';

import styles from './styles';

import Button from '~/components/Button';
import FormInput from '~/components/FormInput';
import Header from '~/components/Header';
import useBackgroundInterval from '~/hooks/common/useBackgroundInterval';
import { AuthStackNavigationProps } from '~/routes/types';
import globalStyles from '~/styles/globalStyles';
import { IEmail, ICode } from '~/types/formData';
import { convertStoM } from '~/utils/common';

const emailSchema = yup.object({
  email: yup
    .string()
    .email('아이디(이메일) 형식이 올바르지 않습니다.')
    .max(50)
    .required('아이디(이메일)을 입력해주세요.'),
});

const codeSchema = yup.object({
  code: yup.string().length(6, '').required('인증번호를 입력해주세요.'),
});

const VERIFY_TIME = 10;

interface IProps {
  navigation: AuthStackNavigationProps<'PWResetEmailVerify'>;
}

const PWResetEmailVerify = ({ navigation }: IProps) => {
  const codeRef = useRef<TextInput>(null);

  // 이메일 인증 카운터
  const [count, setCount] = useState(VERIFY_TIME);
  const [isCount, setIsCount] = useState(false);

  useBackgroundInterval(() => {
    if (isCount) {
      if (count > 0) {
        setCount(count - 1);
        return;
      }
      setIsCount(false);
      setCount(VERIFY_TIME);
    }
  }, 1000);

  // Form
  const {
    control: emailControl,
    handleSubmit: emailHandleSubmit,
    reset: emailReset,
    formState: { errors: emailErrors, isValid: emailIsValid },
  } = useForm<IEmail>({
    resolver: yupResolver(emailSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const {
    control: codeControl,
    handleSubmit: codeHandleSubmit,
    reset: codeReset,
    formState: { errors: codeErrors, isValid: codeIsValid },
  } = useForm<ICode>({
    resolver: yupResolver(codeSchema),
    mode: 'onChange',
    defaultValues: {
      code: '',
    },
  });

  const isDisabledEmailButton = isCount || !emailIsValid;
  const isDisabledCodeButton = !isCount || !codeIsValid;
  // const isVerifyCompleted = emailIsValid && codeIsValid && isVerify;

  const onEmailSubmit = (data) => {
    console.log('Email Submit', data);
    setIsCount(true);
    setTimeout(() => codeRef.current?.focus(), 100);
  };

  const onCodeSubmit = (data) => {
    console.log('Code Submit', data);
    // TODO: API 응답 분기 처리
    // [ERROR] 인증번호가 다릅니다.
    setIsCount(false);
    setCount(VERIFY_TIME);
    navigation.navigate('PWResetMain');
    emailReset();
    codeReset();
  };

  const labelStyles = {
    ...globalStyles.label,
    marginTop: 24,
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header isBack title="비밀번호 재설정" />
      <View style={styles.wrapper}>
        <View>
          <Text style={labelStyles}>이메일 인증</Text>
          <View style={styles.formWrapper}>
            <View style={globalStyles.flex}>
              <FormInput
                control={emailControl}
                error={emailErrors.email?.message}
                name="email"
                keyboardType="email-address"
                placeholder="이메일을 입력해주세요"
                editable={!isCount}
                isChain
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                text={isCount ? convertStoM(count) : '인증요청'}
                onPress={emailHandleSubmit(onEmailSubmit)}
                size="small"
                disabled={isDisabledEmailButton}
              />
            </View>
          </View>
          <View style={styles.formWrapper}>
            <View style={globalStyles.flex}>
              <FormInput
                inputRef={codeRef}
                control={codeControl}
                error={codeErrors.code?.message}
                name="code"
                keyboardType="number-pad"
                placeholder="인증번호 입력"
                editable={isCount}
                maxLength={6}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                text="인증완료"
                onPress={codeHandleSubmit(onCodeSubmit)}
                size="small"
                disabled={isDisabledCodeButton}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PWResetEmailVerify;
