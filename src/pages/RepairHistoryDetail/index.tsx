import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Header from '~/components/Header';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

const RepairHistoryDetail = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const sectionWithDividerStyles = {
    ...styles.section,
    borderBottomColor: colors.HeaderBorder,
    borderBottomWidth: 8,
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 24,
  };

  const dummyRepairList = [
    {
      id: 1,
      date: '2022.02.15',
      division: '유상처리',
      status: '수리완료',
      cost: 10000,
      assigned: '홍길동(인천본사)',
      history: '레이저 부품 교체',
      memo: '1년 무상수리 기간 경과',
    },
    {
      id: 2,
      date: '2022.02.15',
      division: '유상처리',
      status: '수리완료',
      cost: 10000,
      assigned: '홍길동(인천본사)',
      history: '레이저 부품 교체',
      memo: '1년 무상수리 기간 경과',
    },
  ];

  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header title="수리 상세내역" isBorder type="close" onPressIcon={goBack} />
      <ScrollView style={globalStyles.flex} contentContainerStyle={styles.scrollViewInner}>
        <View style={sectionWithDividerStyles}>
          <Text style={globalStyles.detailLabel}>제품정보</Text>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>거래처명</Text>
            <Text style={globalStyles.rowValue}>대한측기 (인천점)</Text>
          </View>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>일련번호</Text>
            <Text style={globalStyles.rowValue}>MINI3D757632</Text>
          </View>
          <View style={globalStyles.rowWrapper}>
            <Text style={globalStyles.rowTitle}>제품명</Text>
            <Text style={globalStyles.rowValue}>코텐 미니레이저 레벨기</Text>
          </View>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={globalStyles.detailLabel}>수리내역</Text>
          <Text style={globalStyles.detailLabel}>2건</Text>
        </View>
        {dummyRepairList.map(({ id, date, division, status, cost, assigned, history, memo }, index) => {
          const isLast = dummyRepairList.length - 1 === index;
          const sectionStyles = isLast
            ? styles.section
            : {
                ...styles.section,
                borderBottomColor: colors.HeaderBorder,
                borderBottomWidth: 8,
                marginBottom: 20,
                paddingBottom: 32,
              };
          return (
            <View key={id} style={sectionStyles}>
              <View style={styles.titleLine}>
                <Text style={styles.date}>{date}</Text>
              </View>
              <View style={globalStyles.rowWrapper}>
                <Text style={globalStyles.rowTitle}>구분</Text>
                <Text style={globalStyles.rowValue}>{division}</Text>
              </View>
              <View style={globalStyles.rowWrapper}>
                <Text style={globalStyles.rowTitle}>수리상태</Text>
                <Text style={globalStyles.rowValue}>{status}</Text>
              </View>
              <View style={globalStyles.rowWrapper}>
                <Text style={globalStyles.rowTitle}>수리비용</Text>
                <Text style={globalStyles.rowValue}>{cost}원</Text>
              </View>
              <View style={globalStyles.rowDivider} />
              <View style={globalStyles.rowWrapper}>
                <Text style={globalStyles.rowTitle}>담당자</Text>
                <Text style={globalStyles.rowValue}>{assigned}</Text>
              </View>
              <View style={globalStyles.rowWrapper}>
                <Text style={globalStyles.rowTitle}>수리내역</Text>
                <Text style={globalStyles.rowValue}>{history}</Text>
              </View>
              <View style={globalStyles.rowWrapper}>
                <Text style={globalStyles.rowTitle}>메모</Text>
                <Text style={globalStyles.rowValue}>{memo}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RepairHistoryDetail;
