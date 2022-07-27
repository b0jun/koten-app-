import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';

import styles from './styles';

import Button from '~/components/Button';
import FormInput from '~/components/FormInput';
import Header from '~/components/Header';
import { AuthStackNavigationProps } from '~/routes';
import globalStyles from '~/styles/globalStyles';
import { IPassword } from '~/types/formData';

const schema = yup.object({
  password: yup
    .string()
    .min(8, '비밀번호를 영문+숫자 조합, 8자리 이상 입력해주세요.')
    .required('비밀번호를 입력해주세요.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 입력해주세요.'),
});

interface IProps {
  navigation: AuthStackNavigationProps<'PWResetMain'>;
}

const PWResetMain = ({ navigation }: IProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPassword>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data) => {
    navigation.navigate('PWResetCompleted');
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header isBack title="비밀번호 재설정" />
      <View style={styles.contentWrapper}>
        <View>
          <FormInput
            control={control}
            errors={errors}
            name="password"
            label="비밀번호"
            placeholder="영문+숫자 조합 8자 이상"
            textContentType="oneTimeCode"
            secureTextEntry
            isChain
          />
          <FormInput
            control={control}
            errors={errors}
            name="passwordConfirm"
            placeholder="비밀번호를 한번 더 입력해주세요"
            textContentType="oneTimeCode"
            secureTextEntry
            last
          />
        </View>
        <View style={globalStyles.formButtonWrapper}>
          <Button text="확인" onPress={handleSubmit(onSubmit)} size="small" disabled={!isValid} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PWResetMain;
