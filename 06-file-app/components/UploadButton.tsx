import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const UploadButton: FC<Props> = ({ label, onPress, disabled }) => (
  <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => [styles.button, pressed && styles.pressed, disabled && styles.disabled]}>
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4f8cff',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    backgroundColor: '#8aaef9',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default UploadButton;
