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
  product: string;
  quantity: number;
  status: DepositType;
}

const dummyInventory: IInventory[] = [
  {
    id: 1,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 2,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositB',
  },
  {
    id: 3,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositC',
  },
  {
    id: 4,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 5,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 6,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 7,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 8,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 9,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 10,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 11,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 12,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 13,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 14,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 15,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 16,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
  {
    id: 17,
    product: 'TOPCON 탑콘 자동레벨 AT-B3',
    quantity: 1,
    status: 'depositA',
  },
];

const ProductReleaseRequest = () => {
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
      <Header isBack title="제품 출고요청" isBorder onPressIcon={() => console.log('TEMP')} />
      <SearchInput
        control={control}
        name="search"
        placeholder="제품명을 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      />
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>제품명</Text>
        <Text style={[globalStyles.headText, styles.second]}>요청수량</Text>
        <Text style={[globalStyles.headText, styles.third]}>요청상태</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          dummyInventory.map(({ id, product, quantity, status }) => (
            <View key={id}>
              <TouchableHighlight
                style={globalStyles.body}
                underlayColor={colors.HeaderBorder}
                onPress={() => console.log('TEMP')}
              >
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {product}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.second]} numberOfLines={1}>
                    {quantity}개
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

export default ProductReleaseRequest;
