import React, { useState } from 'react';
import { Person } from '../models/person';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { FromButton } from '../components/FromButton';
import { registerPerson } from '../services/personService';


type SummaryScreenProps = {
    person: Person;
    onReset: () => void;
}

export const SummaryScreen = ({person, onReset}: SummaryScreenProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      await registerPerson(person);
      Alert.alert(
        'Registro exitoso',
        'La persona fue registrada correctamente.',
        [{ text: 'Aceptar', onPress: onReset }],
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'No se pudo registrar a la persona. Inténtalo nuevamente.';
      Alert.alert('Error al registrar', message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Resumen</Text>
        <View style={styles.card}>
            <Text style = {styles.row}>Nombre: {person.firstName}</Text>
            <Text style = {styles.row}>Apellido: {person.lastName}</Text>
            <Text style = {styles.row}>Correo: {person.email}</Text>
            <Text style = {styles.row}>Telefono: {person.phone}</Text>
        </View>
        <FromButton
          label={isSubmitting ? 'Registrando...' : 'Registrar'}
          onPress={handleRegister}
          disabled={isSubmitting}
        />
        <FromButton label='Registrar otra persona' onPress={onReset} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  title:{
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16
  },
  card:{
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    backgroundColor: 'white'
  },
  row:{
    fontSize: 16,
    marginBottom: 10,
    color: 'black'
  }
})
