// services/photoService.ts
import * as ImagePicker from 'expo-image-picker';

export const takePhoto = async () => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('Se requiere permiso para acceder a la cámara.');
    return null;
  }

  const result: any = await ImagePicker.launchCameraAsync();

  if (!result.cancelled) {
    return result.uri;
  }
  return null;
};

export const selectPhoto = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('Se requiere permiso para acceder a la galería.');
    return null;
  }

  const result: any = await ImagePicker.launchImageLibraryAsync();

  if (!result.cancelled) {
    return result.uri;
  }
  return null;
};