import React  from 'react';
import {Redirect} from 'expo-router';
import {useAuth} from "@/hooks/useAuth";
import {View} from "react-native";

export default function Index() {
  const { isAuthenticated } = useAuth();

  return (
    <View className="flex-1">
      {isAuthenticated ? <Redirect href="/(authenticated)/home"/> : <Redirect href="/login"/>}
    </View>)
}
