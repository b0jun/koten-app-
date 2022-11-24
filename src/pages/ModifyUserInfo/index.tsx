import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';

import styles from './styles';

import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import FormInput from '~/components/FormInput';
import Header from '~/components/Header';
import globalStyles from '~/styles/globalStyles';
import { IDepartment } from '~/types/dropdown';
import { ISignUpData } from '~/types/formData';

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

const dropdownData: IDepartment[] = [
  { label: '물류', value: '물류' },
  { label: '회계', value: '회계' },
];

const SettingUserInfo = () => {
  const navigation = useNavigation();
  const defaultValues = {
    department: '물류',
    name: '123',
    email: 'aaa@aaa.aaa',
  };

  const [isScrollTop, setIsScrollTop] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  const onChangeDropdownValue = (value: '물류' | '회계') => {
    setSelected(value);
  };

  const { department, name, email } = defaultValues;

  useEffect(() => {
    if (department) {
      setSelected(department);
    }
  }, [department]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ISignUpData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: name ?? '',
      email: email ?? '',
      password: '',
      passwordConfirm: '',
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(selected);

    reset();
    navigation.goBack();
  };

  const isValidSignUp = isValid && selected;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={globalStyles.flexGrowWithBG}>
      <SafeAreaView style={[globalStyles.flex]} edges={['top']}>
        <Header isBack title="개인정보 수정" isBorder={!isScrollTop} />
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
            <Dropdown
              label="소속"
              marginBottom={20}
              onChangeDropdownValue={onChangeDropdownValue}
              data={dropdownData}
              selected={selected}
            />
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

export default SettingUserInfo;
