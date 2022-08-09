import React, { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';
import globalStyles from '~/styles/globalStyles';

type FormInputProps<T> = {
  inputRef?: React.RefObject<TextInput>;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  error: string | undefined;
  last?: boolean;
  isChain?: boolean;
} & TextInputProps;

const FormInput = <T extends FieldValues>({
  inputRef,
  control,
  error,
  name,
  label,
  last,
  isChain,
  ...textInputProps
}: FormInputProps<T>) => {
  const [isFocus, setIsFocus] = useState(false);

  const textInputStyles = {
    ...styles.input,
    borderColor: error ? colors.Warning : isFocus ? colors.Secondary : colors.Grey200,
    borderWidth: error || isFocus ? 2 : 1,
  };

  const formInputWrapperStyles = {
    marginBottom: last ? 0 : isChain ? 8 : 20,
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
            ref={inputRef}
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
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
