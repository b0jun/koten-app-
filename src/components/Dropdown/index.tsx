import React from 'react';
import { Image, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { pickerSelectStyles, styles } from './styles';

import globalStyles from '~/styles/globalStyles';
import { IDepartment } from '~/types/dropdown';

interface IProps {
  label: string;
  marginBottom: number;
  size?: 'normal' | 'small';
  onChangeDropdownValue: (value: number) => void;
  data: IDepartment[];
  selected: number | null;
}

const Dropdown = ({ label, marginBottom = 0, size = 'normal', onChangeDropdownValue, data, selected }: IProps) => {
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
          value={selected}
          doneText="적용"
          textInputProps={{ underlineColorAndroid: 'transparent' }}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          placeholder={{
            label: '소속을 선택해주세요',
            value: null,
          }}
          onValueChange={(value) => onChangeDropdownValue(value)}
          items={data}
          style={dropdownStyles}
        />
        <Image source={require('~/assets/icons/ic_expand_more.png')} style={iconStyles} />
      </View>
    </View>
  );
};
export default Dropdown;
