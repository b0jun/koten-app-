import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const dummyInventory = [
  {
    id: 1,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 2,
    office: '인천 지사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 3,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 4,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 5,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 6,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 7,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 8,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 9,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 10,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 11,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 12,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 13,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 14,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 15,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 16,
    office: '인천 본사',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
  {
    id: 17,
    office: '인천 마지막',
    product: '코텐 미니레이저 레벨기',
    stock: 1000,
  },
];

const InventoryStatus = () => {
  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header isBack title="재고현황" type="search" isBorder onPressIcon={() => console.log('TEMP')} />
      <View style={styles.head}>
        <Text style={[styles.headText, styles.first]}>본사/지사</Text>
        <Text style={[styles.headText, styles.second]}>제품명</Text>
        <Text style={[styles.headText, styles.third]}>총재고</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {dummyInventory.map(({ id, office, product, stock }) => (
          <View key={id}>
            <TouchableHighlight
              style={styles.body}
              underlayColor={colors.HeaderBorder}
              onPress={() => console.log('C')}
            >
              <>
                <Text style={[styles.bodyText, styles.first]} numberOfLines={1}>
                  {office}
                </Text>
                <Text style={[styles.bodyText, styles.second]} numberOfLines={1}>
                  {product}
                </Text>
                <Text style={[styles.bodyText, styles.third]} numberOfLines={1}>
                  {stock}개
                </Text>
              </>
            </TouchableHighlight>
            <View style={styles.bodyBorder} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InventoryStatus;
