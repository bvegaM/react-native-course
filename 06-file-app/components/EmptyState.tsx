import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  message: string;
}

const EmptyState: FC<Props> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.emoji}>📂</Text>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#cfd8ec',
    textAlign: 'center',
  },
});

export default EmptyState;
