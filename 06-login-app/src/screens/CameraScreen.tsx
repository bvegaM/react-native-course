import React, { useState } from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function CameraScreen() {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('Listo para tomar una foto.');

  async function takePhoto() {
    setMessage('Pidiendo permiso de cámara...');

    const camPerm = await ImagePicker.requestCameraPermissionsAsync();
    if (camPerm.status !== 'granted') {
      setMessage('Permiso de cámara denegado.');
      Alert.alert('Permiso', 'Necesitamos permiso de cámara para tomar fotos.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.7,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.canceled) {
      setMessage('Cancelaste la cámara.');
      return;
    }

    const uri = result.assets?.[0]?.uri;
    if (!uri) {
      setMessage('No se pudo obtener la foto.');
      return;
    }

    setPhotoUri(uri);
    setMessage('Foto lista. Puedes guardarla en tu galería.');
  }

  async function savePhoto() {
    if (!photoUri) return;

    setMessage('Pidiendo permiso de galería...');

    const mediaPerm = await MediaLibrary.requestPermissionsAsync();
    if (mediaPerm.status !== 'granted') {
      setMessage('Permiso de galería denegado.');
      Alert.alert('Permiso', 'Necesitamos permiso para guardar en tu galería.');
      return;
    }

    setMessage('Guardando...');
    try {
      await MediaLibrary.saveToLibraryAsync(photoUri);
      setMessage('✅ Foto guardada con éxito');
      Alert.alert('Listo', 'Tu foto fue guardada en la galería.');
    } catch {
      setMessage('❌ No se pudo guardar la foto');
      Alert.alert('Error', 'No pude guardar la foto. Intenta de nuevo.');
    }
  }

  function reset() {
    setPhotoUri(null);
    setMessage('Listo para tomar una foto.');
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Cámara</Text>
        <Text style={styles.msg}>{message}</Text>

        {photoUri ? (
          <>
            <Image source={{ uri: photoUri }} style={styles.image} />
            <View style={styles.row}>
              <Button title="Guardar" onPress={savePhoto} />
              <Button title="Tomar otra" onPress={reset} />
            </View>
          </>
        ) : (
          <Button title="Tomar foto" onPress={takePhoto} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 20, gap: 12, justifyContent: 'flex-start' },
  title: { fontSize: 24, fontWeight: '700' },
  msg: { color: '#444' },
  image: { width: '100%', height: 320, borderRadius: 12, backgroundColor: '#eee' },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
});
