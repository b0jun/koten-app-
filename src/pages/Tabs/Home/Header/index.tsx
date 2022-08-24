import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { MainNavigatorParamList } from '~/routes/types';

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigatorParamList>>();

  const goToPage = () => {
    navigation.navigate('Notification');
  };

  const iconWithGapStyles = {
    ...styles.iconWrapper,
    marginRight: 4,
  };

  return (
    <View style={styles.container}>
      <Image source={require('~/assets/images/header_logo.png')} style={styles.logo} />
      <TouchableOpacity style={iconWithGapStyles} activeOpacity={0.7} onPress={goToPage}>
        <Image source={require('~/assets/icons/ic_push.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
