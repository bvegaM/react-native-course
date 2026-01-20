import * as MediaLibrary from 'expo-media-library';
import { PermissionStatus } from 'expo-modules-core';

export const requestMediaPermissions = async (): Promise<PermissionStatus> => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  return status;
};

export const savePhotoToLibrary = async (uri: string) => {
  const asset = await MediaLibrary.createAssetAsync(uri);
  return asset.uri;
};
