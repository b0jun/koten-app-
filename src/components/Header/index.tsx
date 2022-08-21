import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface IProps {
  isBack?: boolean;
  title: string;
  type?: 'common' | 'search' | 'close';
  isBorder?: boolean;
  onPressIcon?: () => void;
}

interface IButtons {
  search: React.ReactElement;
  close: React.ReactElement;
}

const buttonType: IButtons = {
  search: <Image source={require('~/assets/icons/ic_search.png')} style={styles.icon} />,
  close: <Image source={require('~/assets/icons/ic_close.png')} style={styles.icon} />,
};

const Header = ({ isBack, title, type = 'common', isBorder, onPressIcon }: IProps) => {
  const navigation = useNavigation();
  const headerWrapperStyles = {
    ...styles.wrapper,
    borderBottomWidth: isBorder ? (type === 'search' ? 8 : 1) : 0,
  };
  return (
    <View style={headerWrapperStyles}>
      <View style={styles.iconWrapper}>
        {isBack && (
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <Image source={require('~/assets/icons/ic_arrow_back.png')} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconWrapper}>
        {type !== 'common' && (
          <TouchableOpacity onPress={onPressIcon} activeOpacity={0.7}>
            {buttonType[type]}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
