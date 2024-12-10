import React from 'react';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/services/api";
import {TranslationProvider} from "@/contexts/TranslationsContext";
import {AuthProvider} from "@/contexts/AuthContext";
import {PermissionsProvider} from "@/contexts/PermissionsContext";
import {Stack} from "expo-router";

export default function RootLayout() {

  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <AuthProvider>
          <PermissionsProvider>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="(authenticated)/_layout" options={{ headerShown: false }} />
            </Stack>
          </PermissionsProvider>
        </AuthProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}
