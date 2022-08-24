import React from 'react';
import { Modal, Text, View } from 'react-native';

import Button from '../Button';

import styles from './styles';

interface IProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalWrapper = ({ title, children, closeModal }: IProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
          {children}
          <View style={styles.gap} />
          <Button text="확인" onPress={closeModal} size="small" />
        </View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;
