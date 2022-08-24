import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import ModalWrapper from '~/components/ModalWrapper';
import { CommonTable } from '~/components/Table';
import globalStyles from '~/styles/globalStyles';

const dummyNotiList = [
  {
    id: 1,
    type: '신규접수 완료',
    title: '[스마트스토어] A/S 신규 접수가 되었습니다',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 2,
    type: '매입일정 등록',
    title: '[콤팩트 레이저레벨기] 100개, 입고날짜 2022.04.25',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 3,
    type: '매입일정 등록',
    title: '[콤팩트 레이저레벨기] 100개, 입고날짜 2022.04.25',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 4,
    type: '신규접수 완료',
    title: '[스마트스토어] A/S 신규 접수가 되었습니다',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 5,
    type: '신규접수 완료',
    title: '[스마트스토어] A/S 신규 접수가 되었습니다',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 6,
    type: '신규접수 완료',
    title: '[스마트스토어] A/S 신규 접수가 되었습니다',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 7,
    type: '신규접수 완료',
    title: '[스마트스토어] A/S 신규 접수가 되었습니다',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 8,
    type: '신규접수 완료',
    title: '[스마트스토어] A/S 신규 접수가 되었습니다',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 9,
    type: '매입일정 등록',
    title: '[콤팩트 레이저레벨기] 100개, 입고날짜 2022.04.25',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 10,
    type: '매입일정 등록',
    title: '[콤팩트 레이저레벨기] 100개, 입고날짜 2022.04.25',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 11,
    type: '매입일정 등록',
    title: '[콤팩트 레이저레벨기] 100개, 입고날짜 2022.04.25',
    date: '2022.04.01 11:03:08',
  },
  {
    id: 12,
    type: '매입일정 등록',
    title: '[콤팩트 레이저레벨기] 100개, 입고날짜 2022.04.25',
    date: '2022.04.01 11:03:08',
  },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header title="알림" isBack />
      <ScrollView>
        {dummyNotiList.map(({ id, type, title, date }) => (
          <View key={id} style={styles.notiWrapper}>
            <View style={globalStyles.flex}>
              <Text style={styles.notiType}>{type}</Text>
              <Text style={styles.notiTitle} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.notiDate}>{date}</Text>
            </View>
            {type === '매입일정 등록' && (
              <TouchableOpacity style={styles.detailButton} onPress={toggleModal}>
                <Image source={require('~/assets/icons/ic_right_arrow.png')} style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
      {isOpen && (
        <ModalWrapper title="매입일정 내역" closeModal={toggleModal}>
          <CommonTable />
        </ModalWrapper>
      )}
    </SafeAreaView>
  );
};

export default Notification;
