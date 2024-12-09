// services/fileService.ts
import * as DocumentPicker from 'expo-document-picker';
import { Platform } from 'react-native';

export const pickDocument = async () => {
  let result: any = await DocumentPicker.getDocumentAsync({});
  if (result.type === 'success') {
    return result.uri;
  }
  return null;
};

export const uploadFile = async (uri: string) => {
  const formData = new FormData();
  const fileType = uri.substring(uri.lastIndexOf('.') + 1);

  formData.append('file', {
    uri,
    name: `file.${fileType}`,
    type: `application/${fileType}`,
  } as any);

  try {
    const response = await fetch('https://api.tuservidor.com/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Error al subir el archivo:', error);
  }
};