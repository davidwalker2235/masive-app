import React from 'react';
import { View, Text, Button } from 'react-native';
import {useAuth} from "@/hooks/useAuth";
import {Redirect} from "expo-router";

export default function HomeScreen() {
  const { logout, isAuthenticated } = useAuth();

  return (
    <>
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-2xl font-bold mb-4">Bienvenido a la App</Text>
        <Button title="Cerrar Sesión" onPress={logout} />
      </View>
      {!isAuthenticated && <Redirect href="/login"/>}
    </>
  );
}
