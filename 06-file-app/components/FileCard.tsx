import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { UploadedFile } from '../models/UploadedFile';

interface Props {
  file: UploadedFile;
}

const formatFileSize = (size: number) => {
  if (!size) return 'Tamaño desconocido';
  const units = ['B', 'KB', 'MB', 'GB'];
  const index = Math.min(Math.floor(Math.log(size) / Math.log(1024)), units.length - 1);
  const value = size / Math.pow(1024, index);
  return `${value.toFixed(1)} ${units[index]}`;
};

const FileCard: FC<Props> = ({ file }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>📄</Text>
      </View>
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.name}>
          {file.name}
        </Text>
        <Text style={styles.detail}>
          {file.mimeType ?? 'Tipo desconocido'} · {formatFileSize(file.size)}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f3558',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2d4d7a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    color: '#cfd8ec',
    fontSize: 12,
  },
});

export default FileCard;
