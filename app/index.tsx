import React, {useEffect} from 'react';
import {Redirect, Stack} from 'expo-router';
import {useAuth} from "@/hooks/useAuth";
import {View} from "react-native";

export default function Index() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    console.log('is Authenticated: ' + isAuthenticated)
    debugger
  }, [isAuthenticated]);

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(authenticated)/_layout" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
      {isAuthenticated ? <Redirect href="/(authenticated)/home"/> : <Redirect href="/login"/>}
    </View>)
}