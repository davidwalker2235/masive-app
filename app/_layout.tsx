import React from 'react';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/services/api";
import {TranslationProvider} from "@/contexts/TranslationsContext";
import {AuthProvider} from "@/contexts/AuthContext";
import {PermissionsProvider} from "@/contexts/PermissionsContext";
import {Slot} from "expo-router";

export default function RootLayout() {

  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <AuthProvider>
          <PermissionsProvider>
            <Slot />
          </PermissionsProvider>
        </AuthProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}
