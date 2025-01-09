import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity
    className="bg-tahiti-600 px-4 py-2 rounded w-full"
    onPress={onPress}
  >
    <Text className="text-white text-center text-lg">{title}</Text>
  </TouchableOpacity>
);
