import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';

interface IList {
  title: string;
  page: string;
  onPress?: () => void;
}

interface IProps {
  optionTitle: string;
  list: IList[];
  isLast?: boolean;
}

const Option = ({ optionTitle, list, isLast }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();

  const optionWrapperStyles = {
    marginBottom: isLast ? 64 : 24,
  };
  return (
    <View style={optionWrapperStyles}>
      <View style={styles.optionTitleBorder}>
        <Text style={styles.optionTitle}>{optionTitle}</Text>
      </View>
      {list.map(({ title, page }) => (
        <TouchableHighlight
          underlayColor={colors.Grey50}
          key={title}
          style={styles.optionItemButton}
          onPress={() => {
            navigation.navigate(page);
          }}
        >
          <Text style={styles.optionItem}>{title}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default Option;
