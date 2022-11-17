import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import styles from './styles';

import Header from '~/components/Header';
import ModalWrapper from '~/components/ModalWrapper';
import SearchInput from '~/components/SearchInput';
import { CommonTable, SumTable } from '~/components/Table';
import useGetStockDetail from '~/hooks/api/useGetStockDetail';
import useGetStockList from '~/hooks/api/useGetStockList';
import { RootState } from '~/store/configureStore';
import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

interface IFormData {
  search: string;
}

const InventoryStatus = () => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const { data: stockList } = useGetStockList(userInfo?.officeIndex as number);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productIdx, setProductIdx] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setProductIdx(index);
    setIsOpenModal(true);
  };
  const closePopup = () => {
    setProductIdx(null);
    setIsOpenModal(false);
  };
  const { data: stockDetail } = useGetStockDetail({
    officeIndex: userInfo?.officeIndex as number,
    productIndex: productIdx,
  });

  const stockDetailList = stockDetail?.list.map((list, index) => ({
    key: `key_${userInfo?.officeIndex}_${productIdx}_${index}`,
    rowTitle: list.location,
    rowValue: list.quantity,
  }));

  const tableDataA = {
    title: '제품정보',
    rows: [
      { rowTitle: '제품명', rowValue: stockDetail?.product },
      { rowTitle: '본사/지사', rowValue: stockDetail?.office },
    ],
  };

  const tableDataB = {
    title: '재고현황',
    rows: stockDetailList || [],
  };

  const { control, watch, handleSubmit } = useForm<IFormData>({
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

  const onSearch: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    setIsSubmit(true);
  };

  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header isBack title="재고현황" isBorder onPressIcon={() => console.log('TEMP')} />
      <SearchInput
        control={control}
        name="search"
        placeholder="제품명을 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      />
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>본사/지사</Text>
        <Text style={[globalStyles.headText, styles.second]}>제품명</Text>
        <Text style={[globalStyles.headText, styles.third]}>총재고</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          stockList?.map(({ officeIndex, office, product, productIndex, quantity }) => (
            <View key={`${officeIndex}_${productIndex}`}>
              <TouchableHighlight
                style={globalStyles.body}
                underlayColor={colors.HeaderBorder}
                onPress={() => {
                  openPopup(productIndex as number);
                }}
              >
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {office}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.second]} numberOfLines={1}>
                    {product}
                  </Text>
                  <Text style={[globalStyles.bodyText, styles.third]} numberOfLines={1}>
                    {quantity}개
                  </Text>
                </>
              </TouchableHighlight>
              <View style={globalStyles.bodyBorder} />
            </View>
          ))}
      </ScrollView>
      {isOpenModal && (
        <ModalWrapper title="제품 상세정보" closeModal={closePopup}>
          <CommonTable tableData={tableDataA} />
          <SumTable tableData={tableDataB} />
        </ModalWrapper>
      )}
    </SafeAreaView>
  );
};

export default InventoryStatus;
