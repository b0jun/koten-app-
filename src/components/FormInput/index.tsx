import React, { useEffect, useState } from 'react';
import { Control, Controller, DeepRequired, FieldErrorsImpl, FieldValues, get, Path } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

type FormInputProps<T> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  errors: FieldErrorsImpl<DeepRequired<T>>;
  last?: boolean;
} & Omit<TextInputProps, 'name'>;

const FormInput = <T extends FieldValues>({
  control,
  errors,
  name,
  label,
  last,
  ...textInputProps
}: FormInputProps<T>) => {
  const [isFocus, setIsFocus] = useState(false);

  const errorMessages = get(errors, name)?.message;

  const textInputStyles = {
    ...styles.input,
    borderColor: errorMessages ? colors.Warning : isFocus ? colors.Secondary : colors.Black,
    borderWidth: errorMessages || isFocus ? 2 : 1,
  };

  const formInputWrapperStyles = {
    marginBottom: last ? 0 : name === 'password' ? 8 : 20,
  };

  return (
    <View style={formInputWrapperStyles}>
      {label && <Text style={globalStyles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            {...textInputProps}
            style={textInputStyles}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.Grey500}
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        )}
      />
      {errorMessages && <Text style={styles.errorText}>{errorMessages}</Text>}
    </View>
  );
};

export default FormInput;
