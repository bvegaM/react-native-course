import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Photo } from '../models/Photo';

type PhotoPreviewProps = {
  photo: Photo;
};

const PhotoPreview: React.FC<PhotoPreviewProps> = ({ photo }) => {
  const dateLabel = new Date(photo.createdAt).toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.uri }} style={styles.preview} />
      <Text style={styles.caption}>Tomada a las {dateLabel}</Text>
      {photo.savedUri && <Text style={styles.saved}>Guardada en: {photo.savedUri}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  preview: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 18,
  },
  caption: {
    textAlign: 'center',
    color: '#0f172a',
    fontWeight: '500',
  },
  saved: {
    textAlign: 'center',
    color: '#16a34a',
    fontWeight: '600',
  },
});

export default PhotoPreview;

