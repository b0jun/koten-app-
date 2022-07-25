import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';

interface IProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

const Button = ({ text, onPress, disabled }: IProps) => {
  const buttonStyles = {
    ...styles.button,
    backgroundColor: disabled ? '#F5f5F5' : colors.Primary,
  };
  const buttonTextStyles = {
    ...styles.text,
    color: disabled ? colors.Grey200 : colors.White,
  };
  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <Text style={buttonTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
