import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DeliveryStatus from './DeliveryStatus';
import styles from './styles';

import Header from '~/components/Header';
import ModalWrapper from '~/components/ModalWrapper';
import { CommonTable } from '~/components/Table';
import globalStyles from '~/styles/globalStyles';

const ReleaseDetail = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const togglePopup = () => {
    setIsOpenModal((prev) => !prev);
  };

  const dummyTableDataA = {
    rows: [
      { rowTitle: '제품명', rowValue: '코텐 미니레이저 레벨기' },
      { rowTitle: '수리구분', rowValue: '무상A/S' },
      { rowTitle: '수리담당자', rowValue: '수리B' },
      { rowTitle: '수리비용', rowValue: '0원' },
      { rowTitle: '수리완료일', rowValue: '2022-08-26' },
      { rowTitle: '메모', rowValue: '수리 힘듬' },
    ],
  };

  const dummyReleaseIfno = {
    customer: '(주)안전제일',
    trackingNumber: '2203-1A00001',
    date: '2022.02.15',
    assigned: '홍길동',
    deliveryType: '화물 (착불)',
  };

  const dummyProductList = [
    {
      id: 1,
      product: '콤팩트 레이저라벨기',
      quantity: 1,
      status: '수리',
    },
    {
      id: 2,
      product: 'SOKKIA 소끼아 신형 데오도라이트 SOKKIA 소끼아 신형 데오도라이트',
      quantity: 1,
      status: '출고완료',
    },
    {
      id: 3,
      product: '콤팩트 레이저라벨기',
      quantity: 2,
      status: '출고완료',
    },
  ];
  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header title="출고 상세내역" isBorder type="close" onPressIcon={goBack} />
      <ScrollView style={globalStyles.flex} contentContainerStyle={styles.scrollViewInner}>
        <View style={styles.section}>
          <DeliveryStatus status="발송준비" />
          <Text style={globalStyles.detailLabel}>출고 정보</Text>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>거래처명</Text>
            <Text style={globalStyles.rowValue}>{dummyReleaseIfno.customer}</Text>
          </View>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>접수번호</Text>
            <Text style={globalStyles.rowValue}>{dummyReleaseIfno.trackingNumber}</Text>
          </View>
          <View style={globalStyles.rowDivider} />
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>출고 일자</Text>
            <Text style={globalStyles.rowValue}>{dummyReleaseIfno.date}</Text>
          </View>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>출고 담당자</Text>
            <Text style={globalStyles.rowValue}>{dummyReleaseIfno.assigned}</Text>
          </View>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>배송 타입</Text>
            <Text style={globalStyles.rowValue}>{dummyReleaseIfno.deliveryType}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={globalStyles.detailLabel}>제품 정보</Text>
          {dummyProductList.map(({ id, product, quantity, status }, index) => {
            const isLast = index === dummyProductList.length - 1;
            const productWrapperStyles = isLast ? styles.productWrapper : styles.productWrapperWithDivider;
            return (
              <View key={id} style={productWrapperStyles}>
                <View style={styles.productLeftWrapper}>
                  <View style={styles.productItemWrapper}>
                    <Text style={styles.productTitle} numberOfLines={1}>
                      {product}
                    </Text>
                    <Text style={styles.productValue}>주문수량 : {quantity}개</Text>
                  </View>
                </View>
                <TouchableOpacity disabled={status !== '수리'} onPress={togglePopup}>
                  <Text style={styles.productTitle}>{status}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={globalStyles.detailLabel}>결제 정보</Text>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>수리 비용</Text>
            <Text style={globalStyles.rowValue}>+12,500원</Text>
          </View>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>제품 추가 비용</Text>
            <Text style={globalStyles.rowValue}>+100,000원</Text>
          </View>
          <View style={styles.rowWithDivider}>
            <Text style={styles.paymentTitle}>총 결제 금액</Text>
            <Text style={styles.paymentValue}>112,500원</Text>
          </View>
        </View>
      </ScrollView>
      {isOpenModal && (
        <ModalWrapper title="수리 상세정보" closeModal={togglePopup}>
          <CommonTable tableData={dummyTableDataA} />
        </ModalWrapper>
      )}
    </SafeAreaView>
  );
};

export default ReleaseDetail;
