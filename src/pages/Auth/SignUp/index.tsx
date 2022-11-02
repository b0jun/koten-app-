import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';

import styles from './styles';

import type { SubmitHandler } from 'react-hook-form';
import type { ISignUpData } from '~/types/formData';

import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import FormInput from '~/components/FormInput';
import Header from '~/components/Header';
import useGetOfficeList from '~/hooks/api/useGetOfficeList';
import useSignUp from '~/hooks/api/useSignUp';
import globalStyles from '~/styles/globalStyles';

const schema = yup.object({
  name: yup.string().max(50).required('이름을 입력해주세요.'),
  email: yup
    .string()
    .email('아이디(이메일) 형식이 올바르지 않습니다.')
    .max(50)
    .required('아이디(이메일)을 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호를 영문+숫자 조합, 8자리 이상 입력해주세요.')
    .required('비밀번호를 입력해주세요.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 입력해주세요.'),
});

const SignUp = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ISignUpData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const officeList = useGetOfficeList();
  const onChangeDropdownValue = (value: number) => {
    setSelectedOffice(value);
  };

  const { mutate: signUp } = useSignUp();

  const onSubmit: SubmitHandler<ISignUpData> = (data) => {
    const { email, name, password } = data;
    const signUpFormData = {
      office: selectedOffice as number,
      email,
      name,
      password,
    };
    reset();
    signUp(signUpFormData);
  };

  const isValidSignUp = isValid && selectedOffice;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={globalStyles.flexGrowWithBG}>
      <SafeAreaView style={[globalStyles.flex]} edges={['top']}>
        <Header isBack title="회원가입" isBorder={!isScrollTop} />
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => {
            const { y } = nativeEvent.contentOffset;
            if (y === 0) {
              setIsScrollTop(true);
              return;
            }
            setIsScrollTop(false);
          }}
        >
          <View style={styles.inner}>
            {officeList && (
              <Dropdown
                label="소속"
                marginBottom={20}
                onChangeDropdownValue={onChangeDropdownValue}
                selected={selectedOffice}
                data={officeList}
              />
            )}
            <FormInput
              control={control}
              error={errors.name?.message}
              name="name"
              label="이름"
              placeholder="이름을 입력해주세요"
            />
            <FormInput
              control={control}
              error={errors.email?.message}
              name="email"
              keyboardType="email-address"
              label="아이디(이메일)"
              placeholder="이메일을 입력해주세요"
            />
            <FormInput
              control={control}
              error={errors.password?.message}
              name="password"
              label="비밀번호"
              placeholder="영문+숫자 조합 8자 이상"
              textContentType="oneTimeCode"
              secureTextEntry
              isChain
            />
            <FormInput
              control={control}
              error={errors.passwordConfirm?.message}
              name="passwordConfirm"
              placeholder="비밀번호를 한번 더 입력해주세요"
              textContentType="oneTimeCode"
              secureTextEntry
              last
            />
          </View>
        </ScrollView>
        <View style={globalStyles.formButtonWrapperWithHorizontal}>
          <Button text="가입하기" onPress={handleSubmit(onSubmit)} disabled={!isValidSignUp} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
