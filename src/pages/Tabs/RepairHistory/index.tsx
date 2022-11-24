import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import styles from './styles';

import Header from '~/components/Header';
import SearchInput from '~/components/SearchInput';
import useGetRepairList from '~/hooks/api/useGetRepairList';
import { MainStackNavigationProps } from '~/routes/types';
import { RootState } from '~/store/configureStore';
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
interface IFormData {
  search: string;
}

const RepairHistory = ({ navigation }: IProps) => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  const { data: repairList } = useGetRepairList(userInfo?.officeIndex as number);
  console.log('repairList:', repairList);
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [productIdx, setProductIdx] = useState<number | null>(null);

  const openPopup = (index: number) => {
    // setProductIdx(index);
    setIsOpenModal(true);
  };
  const closePopup = () => {
    // setProductIdx(null);
    setIsOpenModal(false);
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

  const onSearch: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    setIsSubmit(true);
  };

  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexWithBG}>
      <Header isBack title="수리내역" isBorder />
      {/* <SearchInput
        control={control}
        name="search"
        placeholder="제품명을 입력해주세요."
        onSubmitEditing={handleSubmit(onSearch)}
      /> */}
      <View style={globalStyles.head}>
        <Text style={[globalStyles.headText, styles.first]}>거래처명</Text>
        <Text style={[globalStyles.headText, styles.second]}>일련번호</Text>
        <Text style={[globalStyles.headText, styles.third]}>제품명</Text>
      </View>
      <ScrollView style={globalStyles.flex}>
        {isShowList &&
          repairList?.map(({ orderIdx, client, serialNumber, product }, index) => (
            // TODO 키값 수정
            // eslint-disable-next-line react/no-array-index-key
            <View key={`${orderIdx}_${index}`}>
              <TouchableHighlight
                style={globalStyles.body}
                underlayColor={colors.HeaderBorder}
                onPress={() => navigation?.navigate('RepairHistoryDetail')}
              >
                <>
                  <Text style={[globalStyles.bodyText, styles.first]} numberOfLines={1}>
                    {client}
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
