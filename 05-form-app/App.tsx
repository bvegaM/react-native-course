import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TOTAL_STEPS, usePersonForm } from './state/usePersonForm';
import { SummaryScreen } from './screens/SummaryScreen';
import { PersonalInfoScreen } from './screens/PersonalInfoScreen';
import { ContactInfoScreen } from './screens/ContactInfoScreen';

export default function App() {
  const { person, step, updateField, nextStep, reset } = usePersonForm();

  const renderScreen = () => {
    if (step === 0) {
      return <PersonalInfoScreen person={person} onChange={updateField} onNext={nextStep} />;
    }

    if (step === 1) {
      return <ContactInfoScreen person={person} onChange={updateField} onNext={nextStep} />;
    }

    return <SummaryScreen person={person} onReset={reset} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.title}>Registro simple</Text>
        <Text style={styles.subtitle}>Paso {step + 1} de {TOTAL_STEPS}</Text>
        <View style={styles.card}>{renderScreen()}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
});
