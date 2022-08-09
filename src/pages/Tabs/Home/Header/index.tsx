import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Header = () => {
  const iconWithGapStyles = {
    ...styles.iconWrapper,
    marginRight: 4,
  };

  return (
    <View style={styles.container}>
      <Image source={require('~/assets/images/header_logo.png')} style={styles.logo} />
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={iconWithGapStyles} activeOpacity={0.7}>
          <Image source={require('~/assets/icons/ic_push.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.7}>
          <Image source={require('~/assets/icons/ic_search.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
