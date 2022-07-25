import React, { Dispatch, SetStateAction } from 'react';
import { Image, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { pickerSelectStyles, styles } from './styles';

import globalStyles from '~/styles/globalStyles';
import { IDepartment } from '~/types/dropdown';

interface IProps {
  label: string;
  marginBottom: number;
  size?: 'normal' | 'small';
  setSelected: Dispatch<SetStateAction<string | null>>;
  data: IDepartment[];
}

const Dropdown = ({ label, marginBottom = 0, size = 'normal', setSelected, data }: IProps) => {
  const dropdownWrapperStyles = {
    marginBottom,
  };

  const isNormal = size === 'normal';

  const dropdownStyles = {
    ...pickerSelectStyles,
    inputIOS: {
      ...pickerSelectStyles.inputIOS,
      height: isNormal ? 48 : 36,
      fontSize: isNormal ? 16 : 14,
    },
    inputAndroid: {
      ...pickerSelectStyles.inputAndroid,
      height: isNormal ? 48 : 36,
      fontSize: isNormal ? 16 : 14,
    },
  };

  const iconStyles = {
    ...styles.moreIcon,
    width: isNormal ? 24 : 12,
    height: isNormal ? 24 : 12,
  };

  return (
    <View style={dropdownWrapperStyles}>
      {label && <Text style={globalStyles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <RNPickerSelect
          doneText="적용"
          textInputProps={{ underlineColorAndroid: 'transparent' }}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          placeholder={{
            label: '소속을 선택해주세요',
            value: null,
          }}
          onValueChange={(value) => setSelected(value)}
          items={data}
          style={dropdownStyles}
        />
        <Image source={require('~/assets/icons/ic_expand_more.png')} style={iconStyles} />
      </View>
    </View>
  );
};
export default Dropdown;
