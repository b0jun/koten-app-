import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

import Button from '~/components/Button';
import globalStyles from '~/styles/globalStyles';

interface IProps {
  title: string;
  description: string;
}

interface INavigation {
  navigate: (value: string) => void;
}

const AuthCompleted = ({ title, description }: IProps) => {
  const navigation = useNavigation<INavigation>();
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={require('~/assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={globalStyles.formButtonWrapper}>
        <Button text="로그인하기" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </View>
  );
};

export default AuthCompleted;
