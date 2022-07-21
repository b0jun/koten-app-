import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface IProps {
  isBack: boolean;
  title: string;
  rightButton?: React.ReactElement;
}
const Header = ({ isBack, title, rightButton }: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
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
