import React  from 'react';
import {Redirect, Stack} from 'expo-router';
import {useAuth} from "@/hooks/useAuth";
import {View} from "react-native";

export default function Index() {
  const { isAuthenticated } = useAuth();

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
      </Stack>
      {isAuthenticated ? <Redirect href="/(authenticated)"/> : <Redirect href="/login"/>}
    </View>)
}
