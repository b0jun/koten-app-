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
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 2,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 3,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 4,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 5,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 6,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 7,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 8,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 9,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 10,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 11,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 12,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 13,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 14,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 15,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 16,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
  {
    id: 17,
    client: '홍길동',
    phoneNumber: '010-1234-5678',
    email: 'koten@naver.com',
  },
];

const dummyTableData = {
  rows: [
    { rowTitle: '고객명', rowValue: '홍길동' },
    { rowTitle: '휴대전화', rowValue: '010-1234-5678' },
    { rowTitle: '이메일', rowValue: 'koten@naver.com' },
    { rowTitle: '주소', rowValue: '인천 서구 원석로 196번안길 8-2' },
    { rowTitle: '유입경로', rowValue: '네이버' },
  ],
};

const ClientManagement = () => {
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
      <Header isBack title="고객 관리" isBorder onPressIcon={() => console.log('TEMP')} />
      <SearchInput
        control={control}
        name="search"
        placeholder="이름을 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      />
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>이름</Text>
        <Text style={[globalStyles.headText, styles.second]}>휴대전화</Text>
        <Text style={[globalStyles.headText, styles.third]}>이메일</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          dummyInventory.map(({ id, client, phoneNumber, email }) => (
            <View key={id}>
              <TouchableHighlight style={globalStyles.body} underlayColor={colors.HeaderBorder} onPress={togglePopup}>
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {client}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.second]} numberOfLines={1}>
                    {phoneNumber}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.third]} numberOfLines={1}>
                    {email}
                  </Text>
                </>
              </TouchableHighlight>
              <View style={globalStyles.bodyBorder} />
            </View>
          ))}
      </ScrollView>
      {isOpenModal && (
        <ModalWrapper title="고객 정보" closeModal={togglePopup}>
          <CommonTable tableData={dummyTableData} />
        </ModalWrapper>
      )}
    </SafeAreaView>
  );
};

export default ClientManagement;
