// components/common/Input.tsx
import React from 'react';
import { TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <TextInput
    className="border-b border-gray-300 w-full mb-4 px-2 py-2 text-lg"
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
  />
);