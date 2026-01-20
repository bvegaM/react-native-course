import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import EmptyState from '../components/EmptyState';
import FileCard from '../components/FileCard';
import UploadButton from '../components/UploadButton';
import { UploadedFile } from '../models/UploadedFile';
import { pickDocument } from '../services/DocumentService';

const UploadScreen = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSelectFile = useCallback(async () => {
    try {
      setLoading(true);
      const file = await pickDocument();
      if (file) {
        setFiles((prev) => [file, ...prev]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sube tus archivos</Text>
        <Text style={styles.subtitle}>Selecciona documentos desde tu dispositivo para guardarlos en la app.</Text>

        <UploadButton label={loading ? 'Cargando...' : 'Elegir archivo'} onPress={handleSelectFile} disabled={loading} />

        <FlatList
          data={files}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FileCard file={item} />}
          ListEmptyComponent={<EmptyState message="Aquí aparecerán los archivos que cargues. ¡Empieza seleccionando uno!" />}
          contentContainerStyle={!files.length && styles.emptyContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0e1d33',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#cfd8ec',
    fontSize: 14,
    marginBottom: 24,
  },
  emptyContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default UploadScreen;
