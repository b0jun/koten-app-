import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface IProps {
  isBack: boolean;
  title: string;
  rightButton?: React.ReactElement;
  isScrollTop?: boolean;
}
const Header = ({ isBack, title, rightButton, isScrollTop }: IProps) => {
  const navigation = useNavigation();
  const headerWrapperStyles = {
    ...styles.wrapper,
    borderBottomWidth: isScrollTop ? 0 : 1,
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
      <View style={styles.iconWrapper}>{rightButton}</View>
    </View>
  );
};

export default Header;
