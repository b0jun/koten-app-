import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Image, TextInput, TextInputProps, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';

type FormInutProps<T> = {
  control: Control<T>;
  name: Path<T>;
} & TextInputProps;

const SearchInput = <T extends FieldValues>({ control, name, ...textInputProps }: FormInutProps<T>) => {
  return (
    <View style={styles.container}>
      <Image source={require('~/assets/icons/ic_search.png')} style={styles.icon} />
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            {...textInputProps}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.Grey500}
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
          />
        )}
      />
    </View>
  );
};

export default SearchInput;
