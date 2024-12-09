// app/(authenticated)/_layout.tsx
import React from 'react';
import { View } from 'react-native';
import { Stack, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AuthenticatedLayout() {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: true,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
            title: 'Inicio',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
            title: 'Perfil',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
            title: 'Configuración',
          }}
        />
      </Tabs>
    </View>
  );
}