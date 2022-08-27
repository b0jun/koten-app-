import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import ModalWrapper from '~/components/ModalWrapper';
import SearchInput from '~/components/SearchInput';
import { CommonTable } from '~/components/Table';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const dummyInventory = [
  {
    id: 1,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 2,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 3,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 4,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 5,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 6,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 7,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 8,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 9,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 10,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 11,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 12,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 13,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 14,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 15,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 16,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
  {
    id: 17,
    customer: '(주)안전제일',
    phoneNumber: '02-424-1234',
    address: '인천 서구 원석로 196안길',
  },
];

const dummyTableDataA = {
  title: '(주) ABCDEF',
  rows: [
    { rowTitle: '사업자번호', rowValue: '코텐 미니레이저 레벨기' },
    { rowTitle: '전화번호', rowValue: '코텐 미니레이저 레벨기' },
    { rowTitle: '화물지점', rowValue: 'Koten' },
    { rowTitle: '주소', rowValue: '인천 서구 원석로 196번안길 8-2' },
  ],
};

const dummyTableDataB = {
  title: '담당자 정보',
  rows: [
    { rowTitle: '이름', rowValue: '홍길동' },
    { rowTitle: '이메일', rowValue: 'gildong@naver.com' },
    { rowTitle: '휴대전화', rowValue: '010-1234-5678' },
  ],
};

const CustomerManagement = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const togglePopup = () => {
    setIsOpenModal((prev) => !prev);
  };

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
      <Header isBack title="거래처 관리" isBorder onPressIcon={() => console.log('TEMP')} />
      <SearchInput
        control={control}
        name="search"
        placeholder="거래처를 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      />
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>거래처명</Text>
        <Text style={[globalStyles.headText, styles.second]}>전화번호</Text>
        <Text style={[globalStyles.headText, styles.third]}>주소</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          dummyInventory.map(({ id, customer, phoneNumber, address }) => (
            <View key={id}>
              <TouchableHighlight style={globalStyles.body} underlayColor={colors.HeaderBorder} onPress={togglePopup}>
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {customer}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.second]} numberOfLines={1}>
                    {phoneNumber}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.third]} numberOfLines={1}>
                    {address}
                  </Text>
                </>
              </TouchableHighlight>
              <View style={globalStyles.bodyBorder} />
            </View>
          ))}
      </ScrollView>
      {isOpenModal && (
        <ModalWrapper title="거래처 정보" closeModal={togglePopup}>
          <CommonTable tableData={dummyTableDataA} />
          <CommonTable tableData={dummyTableDataB} />
        </ModalWrapper>
      )}
    </SafeAreaView>
  );
};

export default CustomerManagement;
