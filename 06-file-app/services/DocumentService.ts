import * as DocumentPicker from 'expo-document-picker';

import { UploadedFile } from '../models/UploadedFile';

const buildId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const pickDocument = async (): Promise<UploadedFile | null> => {
  const result = await DocumentPicker.getDocumentAsync({
    multiple: false,
    copyToCacheDirectory: true,
    type: '*/*',
  });

  if (result.canceled || !result.assets?.length) {
    return null;
  }

  const [asset] = result.assets;

  return {
    id: buildId(),
    name: asset.name ?? 'Archivo sin nombre',
    size: asset.size ?? 0,
    mimeType: asset.mimeType,
    uri: asset.uri,
  };
};
