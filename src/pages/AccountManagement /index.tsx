import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import Label, { DepositType } from '~/components/Label';
import SearchInput from '~/components/SearchInput';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

interface IInventory {
  id: number;
  customer: string;
  product: string;
  status: DepositType;
}

const dummyInventory: IInventory[] = [
  {
    id: 1,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 2,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositB',
  },
  {
    id: 3,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositC',
  },
  {
    id: 4,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 5,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 6,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 7,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 8,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 9,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 10,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 11,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 12,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 13,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 14,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 15,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 16,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
  {
    id: 17,
    customer: '(주)안전제일',
    product: '코텐 미니레이저 레벨기',
    status: 'depositA',
  },
];

const AccountManagement = () => {
  const { control, watch, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      search: '',
    },
  });

  const [isShowList, setIsShowList] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const isTyping = watch('search');

  useEffect(() => {
    setIsSubmit(false);
  }, [isTyping]);

  useEffect(() => {
    if (!isTyping || isSubmit) {
      setIsShowList(true);
    } else {
      setIsShowList(false);
    }
  }, [isTyping, isSubmit]);

  const onSearch = (data: any) => {
    console.log(data);
    setIsSubmit(true);
  };

  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header isBack title="정산 관리" isBorder onPressIcon={() => console.log('TEMP')} />
      {/* <SearchInput
        control={control}
        name="search"
        placeholder="제품명을 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      /> */}
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>거래처명</Text>
        <Text style={[globalStyles.headText, styles.second]}>제품명</Text>
        <Text style={[globalStyles.headText, styles.third]}>출고상태</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          dummyInventory.map(({ id, customer, product, status }) => (
            <View key={id}>
              <TouchableHighlight
                style={globalStyles.body}
                underlayColor={colors.HeaderBorder}
                onPress={() => console.log('TEMP')}
              >
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {customer}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.second]} numberOfLines={1}>
                    {product}
                  </Text>
                  <View style={styles.third}>
                    <Label type={status} />
                  </View>
                </>
              </TouchableHighlight>
              <View style={globalStyles.bodyBorder} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountManagement;
