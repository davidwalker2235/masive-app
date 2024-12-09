// components/ProtectedComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';
import {usePermissions} from "@/hooks/usePermissions";

export default function ProtectedComponent() {
  const { hasPermission } = usePermissions();

  if (!hasPermission('VIEW_PROTECTED_COMPONENT')) {
    return null;
  }

  return (
    <View>
      <Text>Este es un componente protegido.</Text>
    </View>
  );
}