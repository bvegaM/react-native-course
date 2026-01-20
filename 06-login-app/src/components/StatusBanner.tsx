import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type StatusBannerProps = {
  message: string;
  tone?: 'success' | 'error' | 'info';
};

const StatusBanner: React.FC<StatusBannerProps> = ({ message, tone = 'info' }) => {
  const toneStyle = styles[tone];

  return (
    <View style={[styles.container, toneStyle]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 12,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  info: {
    backgroundColor: '#0ea5e9',
  },
  success: {
    backgroundColor: '#22c55e',
  },
  error: {
    backgroundColor: '#ef4444',
  },
});

export default StatusBanner;

