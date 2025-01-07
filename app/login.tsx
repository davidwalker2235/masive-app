import React, {useState} from 'react';
import { View, TextInput, Alert } from 'react-native';
import {Button} from "@/components/common/Button";
import {useAuth} from "@/hooks/useAuth";
import {Redirect} from 'expo-router';
import {useTranslation} from "@/hooks/useTranslations";

export default function LoginScreen() {
  const { login, isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (error) {
      Alert.alert(t('login.error'), t('login.invalidCredentials'));
    }
  };

  return (
    isAuthenticated ? <Redirect href="/(authenticated)/home" /> :
    <View className="flex-1 justify-center items-center px-4 bg-white">
      <TextInput
        className="border-b border-gray-300 w-full mb-4 px-2 py-2 text-lg"
        placeholder={t('login.username')}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="border-b border-gray-300 w-full mb-4 px-2 py-2 text-lg"
        placeholder={t('login.password')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={t('login.loginButton')} onPress={handleLogin} />
    </View>
  );
}
