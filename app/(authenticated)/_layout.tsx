import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

export default function AuthenticatedLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: 'blue' }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="home" size={24} color={color} />
          ),
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
  );
}
