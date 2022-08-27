import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import SearchInput from '~/components/SearchInput';
import { MainStackNavigationProps } from '~/routes/types';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const dummyRepair = [
  {
    id: 1,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 2,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 3,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-21',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 4,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 5,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 6,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 7,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 8,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 9,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 10,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 11,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 12,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 13,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 14,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 15,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 16,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 17,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
  {
    id: 18,
    customer: '(주)안전제일',
    serialNumber: 'KO603125-01',
    product: '코텐 미니레이저 레벨기',
  },
];

interface IProps {
  navigation?: MainStackNavigationProps<'RepairHistoryDetail'>;
}

const RepairHistory = ({ navigation }: IProps) => {
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
      <Header isBack title="수리내역" isBorder onPressIcon={() => console.log('TEMP')} />
      <SearchInput
        control={control}
        name="search"
        placeholder="제품명을 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      />
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>거래처명</Text>
        <Text style={[globalStyles.headText, styles.second]}>일련번호</Text>
        <Text style={[globalStyles.headText, styles.third]}>제품명</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          dummyRepair.map(({ id, customer, serialNumber, product }) => (
            <View key={id}>
              <TouchableHighlight
                style={globalStyles.body}
                underlayColor={colors.HeaderBorder}
                onPress={() => navigation?.navigate('RepairHistoryDetail')}
              >
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {customer}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.second]} numberOfLines={1}>
                    {serialNumber}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.third]} numberOfLines={1}>
                    {product}
                  </Text>
                </>
              </TouchableHighlight>
              <View style={globalStyles.bodyBorder} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RepairHistory;
